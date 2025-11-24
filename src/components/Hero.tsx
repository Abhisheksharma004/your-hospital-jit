'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-linear-to-r from-red-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Manage Your{' '}
              <span className="text-red-600">Hospital</span>{' '}
              Efficiently
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Streamline your hospital operations with our comprehensive management system. 
              From patient records to staff scheduling, we've got you covered with modern, 
              reliable healthcare solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/get-started"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/demo"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Hospitals Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock Dashboard Preview */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">Hospital Dashboard</div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Patient Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <div className="text-2xl font-bold text-red-600">142</div>
                      <div className="text-sm text-gray-600">Active Patients</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <div className="text-2xl font-bold text-green-600">28</div>
                      <div className="text-sm text-gray-600">Staff Online</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-700">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="text-sm text-gray-700">New patient registered</div>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="text-sm text-gray-700">Appointment scheduled</div>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="text-sm text-gray-700">Lab results ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Management</h3>
            <p className="text-gray-600">Comprehensive patient records, medical history, and appointment scheduling in one place.</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Coordination</h3>
            <p className="text-gray-600">Efficient staff scheduling, role management, and communication tools for seamless operations.</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reports</h3>
            <p className="text-gray-600">Real-time insights and comprehensive reports to make data-driven decisions for better care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;