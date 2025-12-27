import Image from "next/image";

export default function ChooseCarSection() {
  const cars = [
    { name: "Mercedes", type: "Sedan", price: 25, image: "/images/hero-bg.jpg" },
    { name: "Mercedes", type: "Sport", price: 50, image: "/images/hero-bg.jpg" },
    { name: "Mercedes", type: "Sedan", price: 45, image: "/images/hero-bg.jpg" },
    { name: "Porsche", type: "SUV", price: 40, image: "/images/hero-bg.jpg" },
    { name: "Toyota", type: "Sedan", price: 35, image: "/images/hero-bg.jpg" },
    { name: "Porsche", type: "SUV", price: 50, image: "/images/hero-bg.jpg" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="flex items-start justify-between">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Choose the car that
            <br />
            suits you
          </h2>

          <a
            href="#"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            View all
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, idx) => (
            <div key={idx} className="rounded-2xl bg-gray-50 p-4">
              <div className="relative h-52 w-full overflow-hidden rounded-xl bg-gray-200 transition-all duration-500 hover:scale-105">
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
                    <div className="text-xs text-gray-500">{car.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-purple-600">${car.price}</div>
                    <div className="text-[10px] leading-4 text-gray-400">per day</div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500">
                  <div className="inline-flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M19.4 15a7.97 7.97 0 0 0 .1-1 7.97 7.97 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8.1 8.1 0 0 0-1.7-1l-.4-2.6H11l-.4 2.6c-.6.2-1.1.5-1.7 1l-2.4-1-2 3.4 2 1.6a8 8 0 0 0 0 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 2.6h4l.4-2.6c.6-.2 1.2-.5 1.7-1l2.4 1 2-3.4-2-1.6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Automat
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    P 95
                  </div>

                  <div className="inline-flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M12 2v20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17 5c-5 3-5 11 0 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 5c5 3 5 11 0 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Air Conditioner
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-orange-500 py-2 text-xs font-semibold text-white hover:bg-orange-600"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
