'use client';

import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">YourHospital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing healthcare management with innovative technology solutions 
            that empower hospitals to deliver exceptional patient care while optimizing operations.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To transform healthcare delivery by providing cutting-edge hospital management solutions 
              that enhance patient outcomes, streamline operations, and empower healthcare professionals 
              to focus on what matters most - caring for patients.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-gray-600 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the global leader in healthcare technology, creating a world where every hospital 
              operates efficiently, every patient receives optimal care, and healthcare accessibility 
              is improved through innovative digital solutions.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, YourHospital emerged from a simple yet powerful vision: to bridge 
                  the gap between healthcare needs and technology solutions. Our journey began when 
                  our founders, experienced healthcare professionals and tech innovators, witnessed 
                  firsthand the challenges hospitals face in managing complex operations.
                </p>
                <p>
                  Today, we proudly serve over 500 healthcare institutions worldwide, from small 
                  clinics to large hospital networks. Our platform has processed millions of patient 
                  records, scheduled countless appointments, and helped healthcare teams save 
                  thousands of hours through automation and intelligent workflows.
                </p>
                <p>
                  Powered by <span className="text-red-600 font-semibold">Jyoti Info Tech</span>, 
                  we continue to innovate and push the boundaries of what's possible in healthcare 
                  technology, always keeping patient care at the heart of everything we do.
                </p>
              </div>
            </div>
            
            {/* Company Stats */}
            <div className="bg-linear-to-br from-red-50 to-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Company Highlights</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Healthcare Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">2M+</div>
                  <div className="text-sm text-gray-600">Patients Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Record</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Patient-Centered</h4>
              <p className="text-gray-600">Every feature we build is designed with patient welfare and care quality as our top priority.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Security First</h4>
              <p className="text-gray-600">We maintain the highest standards of data security and privacy protection for sensitive healthcare information.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Seamless Integration</h4>
              <p className="text-gray-600">Our solutions integrate effortlessly with existing hospital systems and workflows.</p>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="bg-linear-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Hospital?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of healthcare institutions already using YourHospital to improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;