import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, Users, Leaf } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does ReWear work?",
      answer: "ReWear is a platform where you can swap, sell, or buy pre-loved clothing items. Simply upload your items, set your swap value, and connect with other users who are interested in exchanging. Our platform ensures secure transactions and promotes sustainable fashion practices."
    },
    {
      question: "Is ReWear free to use?",
      answer: "Yes! Creating an account and listing items is completely free. We only charge a small service fee when a successful swap or sale is completed, helping us maintain the platform and provide excellent customer service."
    },
    {
      question: "How do I determine the swap value of my items?",
      answer: "Consider factors like original price, brand, condition, and current market demand. Our platform provides guidelines and you can also check similar items to get an idea of appropriate pricing. Remember, fair pricing leads to faster swaps!"
    },
    {
      question: "What condition should my items be in?",
      answer: "We accept items in various conditions from 'Like New' to 'Fair'. Be honest about the condition when listing. Items should be clean, functional, and free from major damage. Our 5-star rating system helps buyers know exactly what to expect."
    },
    {
      question: "How do I contact other users?",
      answer: "Once you're interested in an item, you can contact the seller through our secure messaging system. We provide contact information only after both parties agree to proceed with the swap or purchase."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We support various payment methods including UPI, net banking, credit/debit cards, and digital wallets. All transactions are secure and protected. For swaps, you can also arrange direct exchanges."
    },
    {
      question: "How is shipping handled?",
      answer: "Shipping can be arranged between users directly, or you can use our recommended courier partners. We provide packaging guidelines and tracking support to ensure your items reach safely."
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We have a return policy for items that don't match their description. If there's a significant discrepancy, you can return the item within 3 days of receipt. We also offer dispute resolution services."
    },
    {
      question: "How do I upload quality photos?",
      answer: "Take clear, well-lit photos from multiple angles. Include close-ups of any wear or damage. Use natural lighting and a clean background. You can upload up to 5 images per item in JPEG, PNG, or WebP format."
    },
    {
      question: "Can I edit my listings after posting?",
      answer: "Yes! You can edit your listings anytime from your dashboard. Update prices, descriptions, or photos as needed. If there are active offers, buyers will be notified of significant changes."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely! We take privacy seriously. Your personal information is encrypted and never shared without your consent. Contact details are only revealed when both parties agree to proceed with a transaction."
    },
    {
      question: "How do I build trust with other users?",
      answer: "Complete your profile with accurate information and a clear photo. Be responsive to messages, describe items honestly, and maintain good communication. Our rating system helps build your reputation over time."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-teal-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-500 rounded-full"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-1000">
          <div className="w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-2000">
          <div className="w-6 h-6 bg-teal-200 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-500">
          <div className="w-10 h-10 bg-emerald-200 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-700 text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Got Questions?
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about ReWear and sustainable fashion swapping
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-green-600 transform transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-600 transform transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="pl-10 pr-4">
                    <div className="h-px bg-gradient-to-r from-green-200 to-transparent mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 mr-2" />
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Our community is here to help! Join our support community or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-2xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
                <HelpCircle className="w-5 h-5" />
                Contact Support
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                <Users className="w-5 h-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;