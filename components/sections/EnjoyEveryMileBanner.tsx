export default function EnjoyEveryMileBanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="relative overflow-hidden rounded-[28px] bg-purple-700 px-12 py-14">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-0 top-0 h-full w-[55%] opacity-15">
              <svg
                viewBox="0 0 600 300"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="hex"
                    width="24"
                    height="20.8"
                    patternUnits="userSpaceOnUse"
                    patternTransform="scale(1)"
                  >
                    <path
                      d="M12 0 L24 6.93 L24 13.86 L12 20.8 L0 13.86 L0 6.93 Z"
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="600" height="300" fill="url(#hex)" />
                <path
                  d="M0 110 C120 70, 200 160, 320 120 C450 70, 520 110, 600 90"
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-white">
                Enjoy every mile with
                <br />
                adorable companionship.
              </h2>
              <p className="mt-5 max-w-md text-xs leading-5 text-white/80">
                Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
                bibendum ullamcorper in. Diam tincidunt tincidunt erat
              </p>

              <div className="mt-8 inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm">
                <span className="text-xs font-medium text-gray-500">City</span>
                <input
                  type="text"
                  placeholder="Enter city name"
                  className="w-36 px-2 py-1 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  className="rounded-full bg-purple-500 px-6 py-2 text-xs font-semibold text-white hover:bg-purple-600"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative">
              <div className="relative">
                {/* Background Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-800/20 rounded-lg transform translate-y-4 blur-xl"></div>
                
                {/* Car Image */}
                <div className="relative w-[400px] h-[250px]">
                  <img 
                    src="/images/title.png" 
                    alt="Premium Car" 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div> 
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400/40 rounded-full blur-xl"></div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
