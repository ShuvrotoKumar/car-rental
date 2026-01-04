import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 text-black" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M3 13l2-5h14l2 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M5 13h14v6H5v-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M7.5 16h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M16.5 16h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900">Car Rental</div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">
                <div className="font-semibold text-gray-900">Address</div>
                <div>Oxford Ave. Cary, NC 27511</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16v16H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">
                <div className="font-semibold text-gray-900">Email</div>
                <div>nwiger@yahoo.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72c.1.95.45 1.84 1 2.61l.71.71a2 2 0 0 1 0 2.82L9.18 12.8a15 15 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.82 0l.71.71c.77.55 1.66.9 2.61 1A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-xs text-gray-700">
                <div className="font-semibold text-gray-900">Phone</div>
                <div>+537 547-6401</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Faucibus faucibus pellentesque dictum turpis.</h3>
            <p className="mt-3 text-sm leading-5 text-gray-500">
              Id pellentesque turpis massa a id iaculis lorem t...
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1V12h2.1V9.7c0-2.1 1.2-3.3 3.1-3.3.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4Z" />
                  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                  <path d="M17.5 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.1-6.7L5.3 22H2l7.3-8.4L1 2h6.8l4.6 6.1L18.9 2Zm-1.2 18h1.7L6.2 3.9H4.4L17.7 20Z" />
                </svg>
              </a>
              <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5 12 5 12 5s-6.4 0-8 .6c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.6 8 .6 8 .6s6.4 0 8-.6c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l6 3-6 3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Useful links</h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li><Link href="/about" className="hover:text-purple-600">About us</Link></li>
              <li><Link href="/contact" className="hover:text-purple-600">Contact us</Link></li>
              <li><Link href="/gallery" className="hover:text-purple-600">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-purple-600">F.A.Q</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Vehicles</h3>
            <ul className="mt-4 space-y-2 text-xl text-gray-600">
              <li><Link href="/vehicles?category=Sedan" className="hover:text-purple-600">Sedan</Link></li>
              <li><Link href="/vehicles?category=Cabriolet" className="hover:text-purple-600">Cabriolet</Link></li>
              <li><Link href="/vehicles?category=Pickup" className="hover:text-purple-600">Pickup</Link></li>
              <li><Link href="/vehicles?category=Minivan" className="hover:text-purple-600">Minivan</Link></li>
              <li><Link href="/vehicles?category=SUV" className="hover:text-purple-600">SUV</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Download App</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="#" className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-4 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.7 13.8c0-2 1.6-3 1.7-3.1-1-.1-2.1.6-2.6 1.4-.7 1-1.2 2.3-1.2 3.6 0 .6.1 1.2.3 1.8.2.6.5 1.2.9 1.6.4.5 1 .8 1.6.8.6 0 1.1-.2 1.6-.4.5-.2 1-.4 1.6-.4.6 0 1.1.2 1.6.4.4.2.9.4 1.5.4.7 0 1.3-.3 1.8-.8.5-.5.9-1.1 1.1-1.8-.1 0-2.9-1.1-2.9-3.5Zm1-8.6c-.8 1-1 2.3-.9 3.4 1.1.1 2.2-.6 2.9-1.5.7-.8 1.1-2 1-3.2-1.1 0-2.3.6-3 1.3Z" />
                  <path d="M12.1 6.1c.2-.9.7-1.8 1.3-2.4-.7-.7-1.8-1.2-3-1.2C8.5 2.5 7 3.6 6 5.1 5 6.6 4.5 8.6 4.5 10.4c0 2.4.7 4.7 2 6.4.8 1 1.8 1.7 3 1.7.6 0 1.1-.1 1.6-.3.6-.2 1.1-.3 1.8-.3.7 0 1.2.1 1.8.3.5.2 1 .3 1.6.3 1 0 1.8-.5 2.5-1.3-.9-.4-1.7-1.1-2.3-2-.8-1.2-1.2-2.7-1.2-4.1 0-2.4 1-4.7 2.8-6.2-.7-.7-1.7-1.2-2.8-1.2-1 0-1.8.3-2.5.8-.5.4-.9.9-1.2 1.5Z" opacity="0.55" />
                </svg>
                <div className="leading-none">
                  <div className="text-[9px] text-white/80">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>

              <a href="#" className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-4 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 2l13 10L3 22V2z" fill="#34A853" />
                  <path d="M3 2l9.5 8.2L16 12 3 2z" fill="#4285F4" />
                  <path d="M3 22l9.5-8.2L16 12 3 22z" fill="#FBBC05" />
                  <path d="M16 12l5-3v6l-5-3z" fill="#EA4335" />
                </svg>
                <div className="leading-none">
                  <div className="text-[9px] text-white/80">GET IT ON</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © Copyright Car Rental 2025. Design by Shanto
        </div>
      </div>
    </footer>
  );
}
