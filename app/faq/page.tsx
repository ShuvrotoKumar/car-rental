'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { ChevronDown, Search, HelpCircle, Car, CreditCard, Shield, Phone } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What documents do I need to rent a car?",
    answer: "You'll need a valid driver's license (held for at least 1 year), a credit card in your name, and a form of identification (passport or national ID). International visitors may need an International Driving Permit.",
    category: "Requirements",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 2,
    question: "What is the minimum age to rent a car?",
    answer: "The minimum age is typically 21 years old. Drivers under 25 may incur a young driver surcharge. Some premium vehicles may require drivers to be 25 or older.",
    category: "Requirements",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 3,
    question: "Can I use a debit card to pay for my rental?",
    answer: "Most locations accept credit cards, but debit card policies vary by location. Some locations may accept debit cards with additional requirements and holds. We recommend checking the specific location's policy before booking.",
    category: "Payment",
    icon: <CreditCard className="h-5 w-5" />
  },
  {
    id: 4,
    question: "What insurance options are available?",
    answer: "We offer several insurance options including Collision Damage Waiver (CDW), Liability Protection, Personal Accident Insurance, and Personal Effects Coverage. Basic coverage is included, but additional protection is recommended.",
    category: "Insurance",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: 5,
    question: "How does the fuel policy work?",
    answer: "Most rentals operate on a 'full-to-full' policy - you receive the car with a full tank and should return it full. Pre-purchase fuel options are available at some locations.",
    category: "Policies",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 6,
    question: "Can I modify or cancel my reservation?",
    answer: "Yes, you can modify or cancel your reservation up to 48 hours before pickup without penalty. Cancellations within 48 hours may incur a fee. Free cancellation is available for most bookings.",
    category: "Booking",
    icon: <Phone className="h-5 w-5" />
  },
  {
    id: 7,
    question: "What happens if I return the car late?",
    answer: "Most rentals offer a 1-hour grace period. After that, hourly charges may apply. Returns over 4 hours late may be charged an additional day. Contact the rental location if you anticipate being late.",
    category: "Policies",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 8,
    question: "Are there mileage restrictions?",
    answer: "Most rentals include unlimited mileage within the country of rental. Some specialty vehicles or one-way rentals may have mileage restrictions. Check your rental agreement for details.",
    category: "Policies",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 9,
    question: "Can I add additional drivers?",
    answer: "Yes, you can add additional drivers for a daily fee. Additional drivers must meet the same age and license requirements as the primary driver and be present at pickup.",
    category: "Requirements",
    icon: <Car className="h-5 w-5" />
  },
  {
    id: 10,
    question: "What should I do if I have an accident?",
    answer: "First, ensure everyone's safety and call emergency services if needed. Then contact our 24/7 roadside assistance immediately. Do not admit fault or sign any agreements. Complete an accident report and take photos.",
    category: "Insurance",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: 11,
    question: "Can I rent a car for one-way travel?",
    answer: "Yes, one-way rentals are available between most locations. Additional one-way fees may apply depending on the distance between pickup and drop-off locations.",
    category: "Booking",
    icon: <Phone className="h-5 w-5" />
  },
  {
    id: 12,
    question: "What types of payment do you accept?",
    answer: "We accept major credit cards (Visa, Mastercard, American Express, Discover). Some locations accept cash or debit cards with restrictions. Corporate accounts and prepaid vouchers are also accepted.",
    category: "Payment",
    icon: <CreditCard className="h-5 w-5" />
  }
];

const categories = ["All", "Requirements", "Payment", "Insurance", "Policies", "Booking"];

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedItems(filteredFaqs.map(faq => faq.id));
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-blue-600" />
            </div>
            <div className="text-sm font-semibold text-blue-900">Frequently Asked Questions</div>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">How Can We Help?</h1>
            <div className="mt-2 text-xs text-gray-600">Home / FAQ</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Expand/Collapse All */}
            <div className="flex justify-center gap-4">
              <button
                onClick={expandAll}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          {filteredFaqs.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">
                        {faq.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        <span className="text-xs text-gray-500 mt-1">{faq.category}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        expandedItems.includes(faq.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <div className="text-gray-500">No FAQs found matching your search.</div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">Our customer support team is here to help you 24/7</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                  Call 1-800-RENTAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
