
'use client';

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

interface FormData {
  carType: string;
  rentalLocation: string;
  returnLocation: string;
  rentalDate: string;
  returnDate: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: FormData;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all scale-100 animate-in fade-in zoom-in duration-300 border border-gray-200">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">🚗 Booking Confirmed!</h3>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-purple-700">Car Type:</span>
            <span className="text-sm text-gray-900 font-semibold">{bookingData.carType}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-purple-700">Rental Location:</span>
            <span className="text-sm text-gray-900 font-semibold">{bookingData.rentalLocation}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-purple-700">Return Location:</span>
            <span className="text-sm text-gray-900 font-semibold">{bookingData.returnLocation}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-purple-700">Rental Date:</span>
            <span className="text-sm text-gray-900 font-semibold">{bookingData.rentalDate}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-purple-700">Return Date:</span>
            <span className="text-sm text-gray-900 font-semibold">{bookingData.returnDate}</span>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-semibold text-center">
            Your car has been successfully booked! 🎉
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors shadow-lg"
          >
            Great!
          </button>
        </div>
      </div>
    </div>
  );
};

function InfoPill({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-5 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white" aria-hidden="true">
        <span className="text-sm font-bold">•</span>
      </div>
      <div className="text-xs text-gray-700">
        <div className="font-semibold text-gray-900">{title}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    carType: '',
    rentalLocation: '',
    returnLocation: '',
    rentalDate: '',
    returnDate: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentBookingData, setCurrentBookingData] = useState<FormData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const requiredFields = ['carType', 'rentalLocation', 'returnLocation', 'rentalDate', 'returnDate'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    // Show success modal with current form data
    const currentFormData = { ...formData };
    setCurrentBookingData(currentFormData);
    setShowModal(true);
    
    // Reset form after showing modal
    setFormData({
      carType: '',
      rentalLocation: '',
      returnLocation: '',
      rentalDate: '',
      returnDate: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">Contact Us</div>
            <div className="mt-2 text-xs text-gray-500">Home / Contact Us</div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-black mb-6">Book your car</h3>
              
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Select your car type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select 
                      name="carType"
                      value={formData.carType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select your car type</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Cabriolet">Cabriolet</option>
                      <option value="Pickup">Pickup</option>
                      <option value="Minivan">Minivan</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Rental <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="rentalLocation"
                        value={formData.rentalLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select rental location</option>
                        <option value="Downtown">Downtown</option>
                        <option value="Airport">Airport</option>
                        <option value="City Center">City Center</option>
                        <option value="Suburbs">Suburbs</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Return <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="returnLocation"
                        value={formData.returnLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                      >
                        <option value="">Select return location</option>
                        <option value="Downtown">Downtown</option>
                        <option value="Airport">Airport</option>
                        <option value="City Center">City Center</option>
                        <option value="Suburbs">Suburbs</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Rental <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        name="rentalDate"
                        type="date" 
                        value={formData.rentalDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Return <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        name="returnDate"
                        type="date" 
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white hover:bg-purple-600 py-3 font-semibold rounded-lg"
                >
                  Book now
                </button>
              </form>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src="/images/hero-bg.jpg"
                alt="Contact"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoPill title="Address" value="Oxford Ave. Cary, NC 27511" />
            <InfoPill title="Email" value="nwiger@yahoo.com" />
            <InfoPill title="Phone" value="+537 547-6401" />
            <InfoPill title="Opening hours" value="Sun-Mon: 10am - 10pm" />
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Latest blog posts &amp; news</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-4">
                <div className="relative h-[150px] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Blog"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {i === 0
                      ? "How To Choose The Right Car"
                      : i === 1
                        ? "Which plan is right for me?"
                        : "Enjoy Speed, Choice & Total Control"}
                  </div>
                  <div className="mt-2 text-[10px] text-gray-500">News / 12 April 2024</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-gray-50 py-8">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 text-gray-900">
              <div className="text-2xl font-semibold tracking-tight animate-continuous" style={{animationDelay: '0ms'}}>TOYOTA</div>
              <div className="text-2xl font-semibold tracking-tight italic animate-continuous" style={{animationDelay: '600ms'}}>Ford</div>
              <div className="text-2xl font-semibold tracking-tight animate-continuous" style={{animationDelay: '1200ms'}}>Mercedes</div>
              <div className="text-2xl font-semibold tracking-tight animate-continuous" style={{animationDelay: '1800ms'}}>Jeep</div>
              <div className="text-2xl font-semibold tracking-tight animate-continuous" style={{animationDelay: '2400ms'}}>BMW</div>
              <div className="text-2xl font-semibold tracking-tight animate-continuous" style={{animationDelay: '3000ms'}}>AUDI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Alert */}
      {showError && (
        <div className="fixed top-4 right-4 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-50 max-w-sm">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-red-800">Missing Information</h4>
              <p className="text-sm text-red-600">Please fill in all required fields</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      <BookingModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        bookingData={currentBookingData || formData}
      />

      <Footer />
    </div>
  );
}

