export default function DownloadMobileApp() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="ml-82">
            <h2 className="text-3xl font-bold leading-tight text-gray-900">
              Download
              <br />
              mobile app
            </h2>
            <p className="mt-4 max-w-md text-xs leading-5 text-gray-500">
              imperdiet sit tristique viverra nunc. Ullamcorper amet sit eu sed
              consequat cursus turpis nisl placerat massa. Fermentum urna ut et.
              Turpis aliquet erat hendrerit enim condimentum. Condimentum interdum
              risus bibendum urna
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M16.7 13.8c0-2 1.6-3 1.7-3.1-1-.1-2.1.6-2.6 1.4-.7 1-1.2 2.3-1.2 3.6 0 .6.1 1.2.3 1.8.2.6.5 1.2.9 1.6.4.5 1 .8 1.6.8.6 0 1.1-.2 1.6-.4.5-.2 1-.4 1.6-.4.6 0 1.1.2 1.6.4.4.2.9.4 1.5.4.7 0 1.3-.3 1.8-.8.5-.5.9-1.1 1.1-1.8-.1 0-2.9-1.1-2.9-3.5Zm1-8.6c-.8 1-1 2.3-.9 3.4 1.1.1 2.2-.6 2.9-1.5.7-.8 1.1-2 1-3.2-1.1 0-2.3.6-3 1.3Z" />
                  <path d="M12.1 6.1c.2-.9.7-1.8 1.3-2.4-.7-.7-1.8-1.2-3-1.2C8.5 2.5 7 3.6 6 5.1 5 6.6 4.5 8.6 4.5 10.4c0 2.4.7 4.7 2 6.4.8 1 1.8 1.7 3 1.7.6 0 1.1-.1 1.6-.3.6-.2 1.1-.3 1.8-.3.7 0 1.2.1 1.8.3.5.2 1 .3 1.6.3 1 0 1.8-.5 2.5-1.3-.9-.4-1.7-1.1-2.3-2-.8-1.2-1.2-2.7-1.2-4.1 0-2.4 1-4.7 2.8-6.2-.7-.7-1.7-1.2-2.8-1.2-1 0-1.8.3-2.5.8-.5.4-.9.9-1.2 1.5Z" opacity="0.55" />
                </svg>
                <div className="leading-none">
                  <div className="text-[9px] text-white/80">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
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

          <div className="relative flex justify-center md:justify-end mr-52">
            <div className="relative h-[260px] w-[260px]">
              <div className="absolute right-0 top-2 h-[240px] w-[140px] rounded-[28px] border-4 border-black bg-white" />
              <div className="absolute right-16 top-8 h-[240px] w-[140px] rounded-[28px] border-4 border-black bg-white" />

              <div className="absolute right-[56px] top-[48px] h-[8px] w-[40px] rounded-full bg-black" />
              <div className="absolute right-[0px] top-[22px] h-[8px] w-[40px] rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
