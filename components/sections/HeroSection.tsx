'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

export default function HeroSection() {
  const [formData, setFormData] = useState<FormData>({
    carType: '',
    rentalLocation: '',
    returnLocation: '',
    rentalDate: '',
    returnDate: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Create animation cycle that repeats every 10 seconds
    const animateCycle = () => {
      // Phase 1: Reset to hidden state
      setAnimateText(false);
      
      // Phase 2: Wait a moment, then show animation
      setTimeout(() => {
        setAnimateText(true);
      }, 500);
    };
    
    // Start immediately
    animateCycle();
    
    // Repeat every 10 seconds
    const interval = setInterval(animateCycle, 10000);
    
    return () => clearInterval(interval);
  }, []);

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
    setShowModal(true);
    
    // Reset form after showing modal
    setFormData({
      carType: '',
      rentalLocation: '',
      returnLocation: '',
      rentalDate: '',
      returnDate: ''
    });
    
    // Store current data for modal
    (window as any).currentBookingData = currentFormData;
  };

  return (
    <section className="relative mx-auto max-w-screen-2xl min-h-[600px] rounded-[100px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Hero background" 
          fill
          priority
          quality={100}
          className="object-cover"
          aria-hidden="true"
          onError={(e) => {
            console.error('Image failed to load:', e);
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Image loaded successfully');
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/90 to-purple-900/90 rounded-[100px]" aria-hidden="true"></div>
      <div className="relative grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-16 xl:px-24 w-full max-w-screen-2xl">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight mt-8">
            <span className="inline-block">
              <span 
                style={{
                  display: 'inline-block',
                  opacity: animateText ? 1 : 0,
                  transform: animateText ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                }}
              >
                Experience the road
              </span>
              <br />
              <span 
                style={{
                  display: 'inline-block',
                  opacity: animateText ? 1 : 0,
                  transform: animateText ? 'translateX(0) scale(1)' : 'translateX(-30px) scale(0.9)',
                  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                  transitionDelay: animateText ? '0.6s' : '0s'
                }}
              >
                like never before
              </span>
            </span>
          </h1>
          <p className="text-base mb-8 text-purple-100 max-w-md">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <Link href="/vehicles" className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 font-semibold rounded-lg transition-colors">
            View all cars
          </Link>
        </div>
        
        {/* Booking Form */}
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
            
            <Button type="submit" className="w-full bg-purple-500 text-white hover:bg-purple-600 py-3 font-semibold rounded-lg">
              Book now
            </Button>
          </form>
        </div>
      </div>
      
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
        bookingData={(window as any).currentBookingData || formData}
      />
    </section>
  );
}
