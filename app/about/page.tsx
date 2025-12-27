
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">About Us</div>
            <div className="mt-2 text-xs text-gray-500">Home / About Us</div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900">
                Where every
                <br />
                drive feels
                <br />
                extraordinary
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-gray-900">Variety Brands</div>
                <div className="mt-2 text-xs leading-5 text-gray-500">
                  Platea non auctor fermentum sollicitudin. Eget adipiscing augue
                  sem quam natoque ornare cursus.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Awesome Support</div>
                <div className="mt-2 text-xs leading-5 text-gray-500">
                  Eget adipiscing augue et quam natoque ornare cursus. Viverra dui.
                  Diam quam vulputate vitae.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Maximum Freedom</div>
                <div className="mt-2 text-xs leading-5 text-gray-500">
                  Diam quam gravida ultrices velit dui consequat. Eget ipsum posuere
                  vel montes massa.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Flexibility On the Go</div>
                <div className="mt-2 text-xs leading-5 text-gray-500">
                  Vitae pretium nulla sed quam id nisl semper. Vel non in primis
                  egestas dis faucibus rhoncus.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl bg-gray-100 md:h-[420px]">
              <Image
                src="/images/hero-bg.jpg"
                alt="About video"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 shadow-sm">
                  <div className="h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-600">20k+</div>
              <div className="mt-1 text-xs text-gray-500">Happy customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-600">540+</div>
              <div className="mt-1 text-xs text-gray-500">Count of cars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-purple-600">25+</div>
              <div className="mt-1 text-xs text-gray-500">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold leading-tight text-gray-900">
                Unlock unforgettable
                <br />
                memories on the road
              </h2>
              <div className="mt-5 space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white">
                    ✓
                  </span>
                  Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien.
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white">
                    ✓
                  </span>
                  Ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum.
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-semibold text-white">
                    ✓
                  </span>
                  Viverra scelerisque mauris et nullam molestie et.
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[260px] w-full max-w-[420px] overflow-hidden rounded-3xl bg-gray-100">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="About image"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-purple-700">
            <div className="grid grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-10">
              <div className="text-white">
                <div className="text-lg font-bold">Download our app</div>
                <div className="mt-2 text-xs text-white/80">
                  Make booking faster, simpler, and available anywhere.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a href="#" className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white">
                  <div className="leading-none">
                    <div className="text-[9px] text-white/80">Download on the</div>
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-flex h-10 items-center gap-2 rounded-md bg-black px-3 text-white">
                  <div className="leading-none">
                    <div className="text-[9px] text-white/80">GET IT ON</div>
                    <div className="text-xs font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Reviews from our customers</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { name: "Masum Jony", role: "Customer" },
              { name: "Rai Himon", role: "Customer" },
              { name: "Syria Islam", role: "Customer" },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl bg-gray-50 p-6">
                <div className="text-3xl font-extrabold text-purple-600">“</div>
                <div className="mt-2 text-xs leading-5 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </div>
                <div className="mt-6 rounded-lg bg-purple-600 py-2 text-center text-xs font-semibold text-white">
                  {r.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-gray-900">Top Car Rental Questions</h2>
            </div>

            <div className="mt-8 space-y-3">
              {["How does it work?", "Can I rent a car without a credit card?", "What are the requirements for renting a car?", "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?", "Does Car Rental offer coverage products for purchase with my rental?"]
                .map((q) => (
                  <details key={q} className="group rounded-2xl bg-gray-50 px-5 py-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900">
                      <div className="flex items-center justify-between">
                        <span>{q}</span>
                        <span className="text-gray-500 group-open:rotate-180 transition-transform">⌄</span>
                      </div>
                    </summary>
                    <div className="mt-3 text-xs leading-5 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                      vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>
                  </details>
                ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl bg-purple-700">
            <div className="grid grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-10">
              <div className="text-white">
                <div className="text-lg font-bold">Looking for a car?</div>
                <div className="mt-2 text-xs text-white/80">+537 547-6401</div>
              </div>
              <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-white/10">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="CTA"
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

