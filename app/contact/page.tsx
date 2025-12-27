
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function InfoPill({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-gray-50 px-5 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white" aria-hidden="true">
        <span className="text-sm font-bold">•</span>
      </div>
      <div className="text-xs text-gray-700">
        <div className="font-semibold text-gray-900">{title}</div>
        <div>{value}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">Contact Us</div>
            <div className="mt-2 text-xs text-gray-500">Home / Contact Us</div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-3xl bg-purple-600 p-6 text-white">
              <div className="text-center text-sm font-semibold">Book your car</div>

              <div className="mt-6 space-y-3">
                <select className="h-9 w-full rounded-md bg-white/15 px-3 text-xs text-white placeholder-white/70 outline-none ring-1 ring-white/15">
                  <option className="text-black">Car type</option>
                </select>
                <select className="h-9 w-full rounded-md bg-white/15 px-3 text-xs text-white placeholder-white/70 outline-none ring-1 ring-white/15">
                  <option className="text-black">Place of rental</option>
                </select>
                <select className="h-9 w-full rounded-md bg-white/15 px-3 text-xs text-white placeholder-white/70 outline-none ring-1 ring-white/15">
                  <option className="text-black">Place of return</option>
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="h-9 w-full rounded-md bg-white/15 px-3 text-xs text-white outline-none ring-1 ring-white/15"
                  />
                  <input
                    type="date"
                    className="h-9 w-full rounded-md bg-white/15 px-3 text-xs text-white outline-none ring-1 ring-white/15"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-orange-500 text-xs font-semibold text-white hover:bg-orange-600"
                >
                  Book now
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src="/images/hero-bg.jpg"
                alt="Contact"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoPill title="Address" value="Oxford Ave. Cary, NC 27511" />
            <InfoPill title="Email" value="nwiger@yahoo.com" />
            <InfoPill title="Phone" value="+537 547-6401" />
            <InfoPill title="Opening hours" value="Sun-Mon: 10am - 10pm" />
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900">Latest blog posts &amp; news</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-4">
                <div className="relative h-[150px] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Blog"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {i === 0
                      ? "How To Choose The Right Car"
                      : i === 1
                        ? "Which plan is right for me?"
                        : "Enjoy Speed, Choice & Total Control"}
                  </div>
                  <div className="mt-2 text-[10px] text-gray-500">News / 12 April 2024</div>
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

