import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// GET - Fetch all plans with subscription counts
export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch plans with subscription counts
    const [plans]: any = await pool.query(`
      SELECT 
        p.*,
        COUNT(hs.id) as hospitals
      FROM plans p
      LEFT JOIN hospital_subscriptions hs ON p.id = hs.plan_id AND hs.status = 'Active'
      GROUP BY p.id
      ORDER BY p.id ASC
    `);

    // Parse features from pipe-separated string to array
    const plansWithFeatures = plans.map((plan: any) => ({
      ...plan,
      features: plan.features ? plan.features.split('|') : [],
      price: parseFloat(plan.price),
    }));

    return NextResponse.json({ plans: plansWithFeatures }, { status: 200 });
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plans' },
      { status: 500 }
    );
  }
}

// POST - Create a new plan
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, price, duration, features, color, status } = await request.json();

    // Validate required fields
    if (!name || !duration || !features || features.length === 0) {
      return NextResponse.json(
        { error: 'Name, duration, and features are required' },
        { status: 400 }
      );
    }

    // Convert features array to pipe-separated string
    const featuresString = Array.isArray(features) ? features.join('|') : features;

    // Insert new plan
    const [result]: any = await pool.query(
      `INSERT INTO plans (name, price, duration, features, color, status) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name,
        price || 0,
        duration,
        featuresString,
        color || 'red',
        status || 'Active',
      ]
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'Plan created successfully',
        planId: result.insertId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating plan:', error);
    return NextResponse.json(
      { error: 'Failed to create plan' },
      { status: 500 }
    );
  }
}
