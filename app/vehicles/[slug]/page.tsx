"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type VehicleCategory = "Sedan" | "Cabriolet" | "Pickup" | "Suv" | "Minivan";

type Vehicle = {
  slug: string;
  name: string;
  category: VehicleCategory;
  price: number;
  image: string;
};

const vehicles: Vehicle[] = [
  { slug: "mercedes-sedan", name: "Mercedes", category: "Sedan", price: 25, image: "/images/hero-bg.jpg" },
  { slug: "mercedes-cabriolet", name: "Mercedes", category: "Cabriolet", price: 50, image: "/images/hero-bg.jpg" },
  { slug: "mercedes-sedan-2", name: "Mercedes", category: "Sedan", price: 45, image: "/images/hero-bg.jpg" },
  { slug: "porsche-suv", name: "Porsche", category: "Suv", price: 40, image: "/images/hero-bg.jpg" },
  { slug: "toyota-sedan", name: "Toyota", category: "Sedan", price: 35, image: "/images/hero-bg.jpg" },
  { slug: "porsche-suv-2", name: "Porsche", category: "Suv", price: 50, image: "/images/hero-bg.jpg" },
  { slug: "mercedes-minivan", name: "Mercedes", category: "Minivan", price: 50, image: "/images/hero-bg.jpg" },
  { slug: "toyota-pickup", name: "Toyota", category: "Pickup", price: 60, image: "/images/hero-bg.jpg" },
  { slug: "maybach-sedan", name: "Maybach", category: "Sedan", price: 70, image: "/images/hero-bg.jpg" },
];

function SpecCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <div className="text-xs font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-[11px] text-gray-500">{value}</div>
    </div>
  );
}

function EquipmentItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-700">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white">
        ✓
      </span>
      {label}
    </div>
  );
}

export default function VehicleDetailsPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const vehicle = React.useMemo(() => vehicles.find((v) => v.slug === slug) ?? vehicles[0], [slug]);
  const thumbnails = React.useMemo(() => [vehicle.image, vehicle.image, vehicle.image], [vehicle.image]);
  const [activeImage, setActiveImage] = React.useState(vehicle.image);

  React.useEffect(() => {
    setActiveImage(vehicle.image);
  }, [vehicle.image]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{vehicle.name}</h1>
                <div className="text-sm text-gray-500">{vehicle.category}</div>
              </div>

              <div className="mt-3 flex items-end gap-2">
                <div className="text-2xl font-bold text-purple-600">${vehicle.price}</div>
                <div className="pb-1 text-xs text-gray-500">/ day</div>
              </div>

              <div className="mt-6">
                <div className="relative h-[220px] w-full overflow-hidden rounded-3xl bg-gray-100 md:h-[280px]">
                  <Image src={activeImage} alt={vehicle.name} fill className="object-cover" priority={false} />
                </div>

                <div className="mt-4 flex items-center gap-4">
                  {thumbnails.map((src, idx) => {
                    const isActive = src === activeImage;
                    return (
                      <button
                        key={`${src}-${idx}`}
                        type="button"
                        onClick={() => setActiveImage(src)}
                        className={
                          "relative h-14 w-20 overflow-hidden rounded-xl border transition-colors " +
                          (isActive ? "border-purple-600" : "border-transparent")
                        }
                      >
                        <Image src={src} alt="" fill className="object-cover" priority={false} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-900">Technical Specification</div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <SpecCard title="Gear Box" value="Automat" />
                <SpecCard title="Fuel" value="Petrol" />
                <SpecCard title="Doors" value="2" />
                <SpecCard title="Air Conditioner" value="Yes" />
                <SpecCard title="Seats" value="5" />
                <SpecCard title="Distance" value="500" />
              </div>

              <button
                type="button"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-lg bg-purple-600 text-xs font-semibold text-white hover:bg-purple-700"
              >
                Rent a car
              </button>

              <div className="mt-8">
                <div className="text-sm font-semibold text-gray-900">Car Equipment</div>
                <div className="mt-4 grid grid-cols-2 gap-y-3">
                  <EquipmentItem label="ABS" />
                  <EquipmentItem label="Air Bags" />
                  <EquipmentItem label="Air Conditioner" />
                  <EquipmentItem label="Cruise Control" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Other cars</h2>
            <Link href="/vehicles" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
              View all
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles
              .filter((v) => v.slug !== vehicle.slug)
              .slice(0, 6)
              .map((car) => (
                <div key={car.slug} className="rounded-2xl bg-gray-50 p-4">
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-200">
                    <Image src={car.image} alt={car.name} fill className="object-cover" priority={false} />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{car.name}</div>
                        <div className="text-xs text-gray-500">{car.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">${car.price}</div>
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
                      href={`/vehicles/${car.slug}`}
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
