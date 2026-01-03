import { FaCar, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

export default function FeatureCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Availability Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCar className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
              Class aptent taciti sociosqu ad litora torquent per conubia.
            </p>
          </div>
          
          {/* Comfort Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comfort</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
              Class aptent taciti sociosqu ad litora torquent per conubia.
            </p>
          </div>
          
          {/* Savings Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaDollarSign className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Savings</h3>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
              Class aptent taciti sociosqu ad litora torquent per conubia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
