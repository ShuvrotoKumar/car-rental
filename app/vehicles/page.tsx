
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type VehicleCategory = "All vehicles" | "Sedan" | "Cabriolet" | "Pickup" | "Suv" | "Minivan";

type Vehicle = {
  slug: string;
  name: string;
  category: Exclude<VehicleCategory, "All vehicles">;
  price: number;
  image: string;
};

const categories: VehicleCategory[] = [
  "All vehicles",
  "Sedan",
  "Cabriolet",
  "Pickup",
  "Suv",
  "Minivan",
];

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

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: VehicleCategory;
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

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = React.useState<VehicleCategory>("All vehicles");

  const filteredVehicles = React.useMemo(() => {
    if (activeCategory === "All vehicles") return vehicles;
    return vehicles.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Select a vehicle group
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {categories.map((c) => (
              <CategoryPill
                key={c}
                label={c}
                active={activeCategory === c}
                onClick={() => setActiveCategory(c)}
              />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVehicles.map((car, idx) => (
              <div
                key={`${car.name}-${car.category}-${idx}`}
                className="rounded-2xl bg-gray-50 p-4"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-200 transition-all duration-500 hover:scale-105">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    priority={false}
                  />
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
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-purple-600 py-2 text-xs font-semibold text-white hover:bg-purple-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-gray-50 py-8">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 text-gray-900">
              <div className="text-2xl font-semibold tracking-tight">TOYOTA</div>
              <div className="text-2xl font-semibold tracking-tight italic">Ford</div>
              <div className="text-2xl font-semibold tracking-tight">Mercedes</div>
              <div className="text-2xl font-semibold tracking-tight">Jeep</div>
              <div className="text-2xl font-semibold tracking-tight">BMW</div>
              <div className="text-2xl font-semibold tracking-tight">AUDI</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

