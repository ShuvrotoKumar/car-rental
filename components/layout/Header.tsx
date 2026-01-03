"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  
  // Check if we're on a car details page and get car info
  const isCarDetailsPage = pathname?.startsWith('/vehicles/') && pathname.split('/').length === 3;
  const carSlug = isCarDetailsPage ? pathname.split('/')[2] : null;
  const currentCar = carSlug ? carDatabase.find(car => car.slug === carSlug) : null;

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4 md:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
            {/* <div className="w-6 h-6 bg-gray-900 rounded-sm"></div> */}
            <div className="h-8 w-8 text-black" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M3 13l2-5h14l2 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M5 13h14v6H5v-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M7.5 16h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M16.5 16h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span>Car Rental</span>
          </Link>
          
          {/* Dynamic Car Info in Header */}
         
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group">
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link href="/vehicles" className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group">
            <span className="relative z-10">Vehicles</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          {isCarDetailsPage && currentCar ? (
            <span className="text-gray-900 font-medium">
               Details
            </span>
          ) : (
            <Link href="/vehicles/mercedes-sedan" className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group">
              <span className="relative z-10">Details</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          )}
          <Link href="/about" className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group">
            <span className="relative z-10">About Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
        
        {/* Desktop Contact Info */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.1.95.45 1.84 1 2.61l.71.71a2 2 0 0 1 0 2.82L9.18 12.8a15 15 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.82 0l.71.71c.77.55 1.66.9 2.61 1A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div className="text-sm">
            <div className="text-gray-600">Need help?</div>
            <div className="font-semibold text-gray-900">+996 247-1680</div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="mx-auto max-w-screen-2xl px-6 py-4 md:px-10 lg:px-16 xl:px-24">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                href="/vehicles" 
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Vehicles</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              {isCarDetailsPage && currentCar ? (
                <span className="text-gray-900 font-medium py-2">
                  {currentCar.name} {currentCar.type} Details
                </span>
              ) : (
                <Link 
                  href="/vehicles/mercedes-sedan" 
                  className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Details</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              )}
              <Link 
                href="/about" 
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">About Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out group py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.1.95.45 1.84 1 2.61l.71.71a2 2 0 0 1 0 2.82L9.18 12.8a15 15 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.82 0l.71.71c.77.55 1.66.9 2.61 1A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="text-gray-600">Need help?</div>
                  <div className="font-semibold text-gray-900">+996 247-1680</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
