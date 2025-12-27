import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-screen-2xl pt-24 pb-16 h-[600px] rounded-[100px] overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="" 
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/90 to-purple-900/90 rounded-[100px]" aria-hidden="true"></div>
      <div className="relative grid md:grid-cols-2 gap-12 items-center px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="text-white py-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Experience the road <br /> like never before
          </h1>
          <p className="text-base mb-8 text-purple-100 max-w-md">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida. Quis nunc interdum gravida ullamcorper
          </p>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 font-semibold rounded-lg">
            View all cars
          </Button>
        </div>
        
        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-black mb-6">Book your car</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Select your car type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none">
                  <option>Select your car type</option>
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
                  <select className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none">
                    <option>Select rental location</option>
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
                  <select className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none">
                    <option>Select return location</option>
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
                    type="date" 
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Return <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3 font-semibold rounded-lg">
              Book now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
