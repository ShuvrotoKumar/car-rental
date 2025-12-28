"use client";

import * as React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type GalleryCategory = "All" | "Exterior" | "Interior" | "Details" | "Events";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  title: string;
};

const categories: GalleryCategory[] = [
  "All",
  "Exterior", 
  "Interior",
  "Details",
  "Events"
];

const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/hero-bg.jpg", alt: "Luxury sedan exterior", category: "Exterior", title: "Mercedes-Benz S-Class" },
  { id: "2", src: "/images/hero-bg.jpg", alt: "Car interior dashboard", category: "Interior", title: "Premium Interior" },
  { id: "3", src: "/images/hero-bg.jpg", alt: "Car wheel detail", category: "Details", title: "Alloy Wheels" },
  { id: "4", src: "/images/hero-bg.jpg", alt: "SUV side view", category: "Exterior", title: "BMW X5" },
  { id: "5", src: "/images/hero-bg.jpg", alt: "Leather seats", category: "Interior", title: "Luxury Seating" },
  { id: "6", src: "/images/hero-bg.jpg", alt: "Engine bay", category: "Details", title: "V8 Engine" },
  { id: "7", src: "/images/hero-bg.jpg", alt: "Car event gathering", category: "Events", title: "Car Meet 2024" },
  { id: "8", src: "/images/hero-bg.jpg", alt: "Convertible top down", category: "Exterior", title: "Cabriolet" },
  { id: "9", src: "/images/hero-bg.jpg", alt: "Navigation system", category: "Interior", title: "Infotainment" },
  { id: "10", src: "/images/hero-bg.jpg", alt: "Headlight detail", category: "Details", title: "LED Lights" },
  { id: "11", src: "/images/hero-bg.jpg", alt: "Racing event", category: "Events", title: "Track Day" },
  { id: "12", src: "/images/hero-bg.jpg", alt: "Sports car rear", category: "Exterior", title: "Porsche 911" },
];

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: GalleryCategory;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors " +
        (active
          ? "border-purple-600 bg-purple-600 text-white"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50")
      }
    >
      {label}
    </button>
  );
}

function LightboxModal({
  image,
  isOpen,
  onClose,
}: {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative aspect-video">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{image.category}</p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = React.useState<GalleryCategory>("All");
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const filteredImages = React.useMemo(() => {
    if (activeCategory === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">Gallery</div>
            <div className="mt-2 text-xs text-gray-500">Home / Gallery</div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900">
              Our Car Collection
            </h1>
            <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
              Explore our stunning collection of luxury vehicles through carefully curated images showcasing exteriors, interiors, and special details.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs text-gray-300 mt-1">{image.category}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="mt-12 rounded-3xl bg-gray-50 p-10 text-center text-sm text-gray-600">
              No images found in {activeCategory} category.
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="text-sm text-gray-500">
              Showing {filteredImages.length} of {galleryImages.length} images
            </div>
          </div>
        </div>
      </section>

      <LightboxModal
        image={selectedImage}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />

      <Footer />
    </div>
  );
}
