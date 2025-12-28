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

            <div className="absolute right-[-40px] bottom-[-30px] opacity-25">
              <svg
                width="380"
                height="220"
                viewBox="0 0 380 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74 138c5-29 30-52 60-55l80-8c30-3 60 7 82 27l32 30c12 11 19 27 19 44v8c0 10-8 18-18 18H43c-10 0-18-8-18-18v-18c0-6 1-12 2-18l47-10Z"
                  fill="rgba(0,0,0,0.35)"
                />
                <path
                  d="M130 92c-9 1-17 8-20 16l-8 22h160l-14-30c-4-9-13-14-23-13l-95 5Z"
                  fill="rgba(0,0,0,0.35)"
                />
                <circle cx="106" cy="176" r="22" fill="rgba(0,0,0,0.42)" />
                <circle cx="288" cy="176" r="22" fill="rgba(0,0,0,0.42)" />
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
                <div className="w-36" />
                <button
                  type="button"
                  className="rounded-full bg-orange-500 px-6 py-2 text-xs font-semibold text-white hover:bg-orange-600"
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
                
                {/* Decorative Elements
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div> 
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
