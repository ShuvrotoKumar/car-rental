'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Car {
  name: string;
  type: string;
  price: number;
  image: string;
  slug: string;
}

const carDatabase: Car[] = [
  { name: "Mercedes", type: "Sedan", price: 25, image: "/images/hero-bg.jpg", slug: "mercedes-sedan" },
  { name: "Mercedes", type: "Cabriolet", price: 50, image: "/images/hero-bg.jpg", slug: "mercedes-cabriolet" },
  { name: "Mercedes", type: "Sedan", price: 45, image: "/images/hero-bg.jpg", slug: "mercedes-sedan-2" },
  { name: "Porsche", type: "SUV", price: 40, image: "/images/hero-bg.jpg", slug: "porsche-suv" },
  { name: "Toyota", type: "Sedan", price: 35, image: "/images/hero-bg.jpg", slug: "toyota-sedan" },
  { name: "Porsche", type: "SUV", price: 50, image: "/images/hero-bg.jpg", slug: "porsche-suv-2" },
  { name: "Mercedes", type: "Minivan", price: 50, image: "/images/hero-bg.jpg", slug: "mercedes-minivan" },
  { name: "Toyota", type: "Pickup", price: 60, image: "/images/hero-bg.jpg", slug: "toyota-pickup" },
  { name: "Maybach", type: "Sedan", price: 70, image: "/images/hero-bg.jpg", slug: "maybach-sedan" },
];

export default function VehicleDetailsPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carSlug = params.slug;
    const foundCar = carDatabase.find(c => c.slug === carSlug);
    
    if (foundCar) {
      setCar(foundCar);
    } else {
      // Car not found, redirect to vehicles page
      router.push('/vehicles');
    }
    setLoading(false);
  }, [params.slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!car) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/vehicles" className="hover:text-gray-700">Vehicles</Link>
            <span>/</span>
            <span className="text-gray-900">{car.name} {car.type}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Car Image */}
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
                priority={true}
              />
            </div>

            {/* Car Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
                  <p className="text-lg text-gray-600">{car.type}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-purple-600">${car.price}</span>
                    <span className="text-gray-500">per day</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Competitive pricing with no hidden fees. Insurance included.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" strokeWidth="2" />
                      <path d="M19.4 15a7.97 7.97 0 0 0 .1-1 7.97 7.97 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8.1 8.1 0 0 0-1.7-1l-.4-2.6H11l-.4 2.6c-.6.2-1.1.5-1.7 1l-2.4-1-2 3.4 2 1.6a8 8 0 0 0 0 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h4l.4-2.6c.6-.2 1.2-.5 1.7-1l2.4 1 2-3.4-2-1.6Z" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <div className="text-sm font-medium text-gray-700">Automatic</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeWidth="2" />
                    </svg>
                    <div className="text-sm font-medium text-gray-700">4 Seats</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2v20" strokeWidth="2" strokeLinecap="round" />
                      <path d="M17 5c-5 3-5 11 0 14" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 5c5 3 5 11 0 14" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div className="text-sm font-medium text-gray-700">AC</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience luxury and comfort with our {car.name} {car.type}. This premium vehicle combines 
                    elegant design with powerful performance, making it perfect for both business trips and leisure travel. 
                    Features include automatic transmission, climate control, and advanced safety systems to ensure 
                    a smooth and secure journey.
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                  <ul className="grid grid-cols-2 gap-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      GPS Navigation System
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bluetooth Audio
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      USB Charging Ports
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cruise Control
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Parking Sensors
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lane Assist
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                >
                  Book Now
                </Link>
                <button
                  onClick={() => router.back()}
                  className="flex-1 bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back to Vehicles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose More Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Choose More Cars</h2>
            <Link href="/vehicles" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carDatabase
              .filter((c) => c.slug !== car.slug)
              .slice(0, 6)
              .map((otherCar) => (
                <div key={otherCar.slug} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-200">
                    <Image
                      src={otherCar.image}
                      alt={otherCar.name}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{otherCar.name}</div>
                        <div className="text-xs text-gray-500">{otherCar.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">${otherCar.price}</div>
                        <div className="text-[10px] leading-4 text-gray-400">per day</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                      <div className="inline-flex items-center gap-1">
                        <span className="text-gray-400">⌁</span>
                        Automat
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <span className="text-gray-400">⌁</span>
                        P 95
                      </div>
                      <div className="inline-flex items-center gap-1">
                        <span className="text-gray-400">⌁</span>
                        Air Conditioner
                      </div>
                    </div>

                    <Link
                      href={`/vehicles/${otherCar.slug}`}
                      className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg bg-purple-600 text-xs font-semibold text-white hover:bg-purple-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
