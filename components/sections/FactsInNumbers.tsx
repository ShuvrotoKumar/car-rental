export default function FactsInNumbers() {
  const items = [
    {
      value: "540+",
      label: "Cars",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 13l2-5h14l2 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5 13h14v6H5v-6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 19v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 19v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.5 16h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16.5 16h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "20k+",
      label: "Customers",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 21v-2a4 4 0 0 0-3-3.87"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "25+",
      label: "Years",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 7V3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 9h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 13h3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 17h7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "20m+",
      label: "Miles",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20 14a8 8 0 1 0-16 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 12l4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="relative overflow-hidden rounded-[28px] bg-purple-700 px-10 py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
          </div>

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white">Facts In Numbers</h2>
            <p className="mt-3 text-xs text-white/80 max-w-md mx-auto leading-5">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
              fermentum
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 text-white">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{item.value}</div>
                  <div className="text-[10px] leading-4 text-gray-500">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
