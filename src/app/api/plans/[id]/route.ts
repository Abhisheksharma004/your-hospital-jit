import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// PUT - Update a plan
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: planId } = await context.params;
    const { name, price, duration, features, color, status } = await request.json();

    console.log('Updating plan:', planId, { name, price, duration, color, status });

    // Validate required fields
    if (!name || !duration || !features) {
      return NextResponse.json(
        { error: 'Name, duration, and features are required' },
        { status: 400 }
      );
    }

    // Convert features array to pipe-separated string
    const featuresString = Array.isArray(features) ? features.join('|') : features;

    // Update plan
    const [result]: any = await pool.query(
      `UPDATE plans 
       SET name = ?, price = ?, duration = ?, features = ?, color = ?, status = ?
       WHERE id = ?`,
      [name, price || 0, duration, featuresString, color || 'red', status || 'Active', planId]
    );

    console.log('Update result:', result);

    return NextResponse.json(
      { success: true, message: 'Plan updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating plan:', error);
    return NextResponse.json(
      { error: 'Failed to update plan' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a plan
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id: planId } = await context.params;

    // Check if any hospitals are subscribed to this plan
    const [subscriptions]: any = await pool.query(
      `SELECT COUNT(*) as count FROM hospital_subscriptions 
       WHERE plan_id = ? AND status = 'Active'`,
      [planId]
    );

    if (subscriptions[0].count > 0) {
      return NextResponse.json(
        { error: 'Cannot delete plan with active subscriptions' },
        { status: 400 }
      );
    }

    // Delete plan
    await pool.query('DELETE FROM plans WHERE id = ?', [planId]);

    return NextResponse.json(
      { success: true, message: 'Plan deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting plan:', error);
    return NextResponse.json(
      { error: 'Failed to delete plan' },
      { status: 500 }
    );
  }
}
