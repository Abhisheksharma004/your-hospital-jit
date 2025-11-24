'use client';

import React from 'react';
import Link from 'next/link';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '7,999',
      description: 'Perfect for small clinics and healthcare startups',
      features: [
        'Up to 50 patients',
        'Basic patient management',
        '5 staff accounts',
        'Email support',
        'Mobile app access',
        'Basic reporting',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '24,999',
      description: 'Ideal for growing hospitals and medical centers',
      features: [
        'Up to 500 patients',
        'Advanced patient management',
        '25 staff accounts',
        'Priority support 24/7',
        'Mobile app access',
        'Advanced analytics',
        'Custom integrations',
        'Staff scheduling',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large hospital networks and healthcare systems',
      features: [
        'Unlimited patients',
        'Full feature access',
        'Unlimited staff accounts',
        'Dedicated support team',
        'Mobile app access',
        'Custom development',
        'API access',
        'Multi-location support',
        'Advanced security',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="text-red-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your healthcare facility. All plans include our core features
            with no hidden fees. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-red-600 text-white shadow-2xl transform scale-105 border-4 border-red-700'
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-red-100' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  {plan.price !== 'Custom' && (
                    <span className="text-4xl font-bold">₹</span>
                  )}
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span
                      className={`ml-2 ${
                        plan.highlighted ? 'text-red-100' : 'text-gray-600'
                      }`}
                    >
                      /month
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-green-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? 'text-red-50' : 'text-gray-700'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-red-600 hover:bg-gray-100'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Can I switch plans later?
              </h4>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect
                immediately, and we'll prorate any differences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a free trial?
              </h4>
              <p className="text-gray-600">
                Absolutely! We offer a 14-day free trial on all plans. No credit card required
                to start your trial.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What payment methods do you accept?
              </h4>
              <p className="text-gray-600">
                We accept all major credit cards, bank transfers, and can arrange invoicing for
                Enterprise customers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Is my data secure?
              </h4>
              <p className="text-gray-600">
                Yes! We use bank-level encryption and are fully HIPAA compliant. Your data is
                backed up daily and stored securely.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl p-12 text-center shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you choose the right plan for your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg"
            >
              Contact Sales
            </Link>
            <Link
              href="/demo"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
