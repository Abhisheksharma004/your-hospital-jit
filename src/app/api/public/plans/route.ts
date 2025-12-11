import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET - Fetch all active plans for public display (no authentication required)
export async function GET(request: NextRequest) {
  try {
    // Fetch only active plans
    const [plans]: any = await pool.query(`
      SELECT 
        id,
        name,
        price,
        duration,
        features
      FROM plans
      WHERE status = 'Active'
      ORDER BY price ASC
    `);

    // Parse features from pipe-separated string to array
    const plansWithFeatures = plans.map((plan: any) => ({
      ...plan,
      features: plan.features ? plan.features.split('|') : [],
      price: parseFloat(plan.price),
    }));

    return NextResponse.json({ plans: plansWithFeatures }, { status: 200 });
  } catch (error) {
    console.error('Error fetching public plans:', error);
    return NextResponse.json(
      { error: 'Failed to fetch plans' },
      { status: 500 }
    );
  }
}
