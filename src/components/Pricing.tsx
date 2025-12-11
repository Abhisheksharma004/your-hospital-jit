'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Plan {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
}

const Pricing: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/public/plans', {
        cache: 'no-store',
      });

      if (response.ok) {
        const data = await response.json();
        setPlans(data.plans);
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPlanDescription = (name: string) => {
    const descriptions: { [key: string]: string } = {
      'Starter': 'Perfect for small clinics and healthcare startups',
      'Professional': 'Ideal for growing hospitals and medical centers',
      'Enterprise': 'For large hospital networks and healthcare systems',
    };
    return descriptions[name] || 'Comprehensive healthcare management solution';
  };

  const isHighlighted = (index: number) => {
    // Highlight the middle plan (Professional) if there are 3 plans
    return plans.length === 3 && index === 1;
  };

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
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading pricing plans...</p>
            </div>
          </div>
        ) : plans.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No pricing plans available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const highlighted = isHighlighted(index);
              const isCustomPrice = plan.price === 0 || plan.duration === 'Custom';

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-8 ${
                    highlighted
                      ? 'bg-red-600 text-white shadow-2xl transform scale-105 border-4 border-red-700'
                      : 'bg-white text-gray-900 shadow-lg border border-gray-200'
                  }`}
                >
                  {highlighted && (
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
                        highlighted ? 'text-red-100' : 'text-gray-600'
                      }`}
                    >
                      {getPlanDescription(plan.name)}
                    </p>
                    <div className="flex items-baseline justify-center">
                      {!isCustomPrice && (
                        <span className="text-4xl font-bold">₹</span>
                      )}
                      <span className="text-5xl font-bold">
                        {isCustomPrice ? 'Custom' : plan.price.toLocaleString()}
                      </span>
                      {!isCustomPrice && (
                        <span
                          className={`ml-2 ${
                            highlighted ? 'text-red-100' : 'text-gray-600'
                          }`}
                        >
                          /{plan.duration.toLowerCase()}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className={`w-6 h-6 mr-3 shrink-0 ${
                            highlighted ? 'text-white' : 'text-green-500'
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
                            highlighted ? 'text-red-50' : 'text-gray-700'
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
                      highlighted
                        ? 'bg-white text-red-600 hover:bg-gray-100'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {isCustomPrice ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              );
            })}
          </div>
        )}

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
