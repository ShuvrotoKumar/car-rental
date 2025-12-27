import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="w-full max-w-[440px]">
            <div className="relative h-[460px] ml-12 w-full overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105">
              <Image
                src="/images/hero-bg.jpg"
                alt="Testimonials"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="space-y-10 pt-2">
            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-purple-600 text-sm font-semibold leading-none text-white">
                1
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Erat at semper</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Non amet fermentum est in enim at sit ullamcorper. Sit elementum
                  noncus rutam feugiat. Risus sem fermentum...
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-purple-600 text-sm font-semibold leading-none text-white">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Urna nec vivamus risus duis arcu</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
                  tristique et gravida. Quis nunc interdum gravida ullamcorper
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-purple-600 text-sm font-semibold leading-none text-white">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Lobortis euismod imperdiet tempus</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Viverra scelerisque mauris et nullam molestie et. Augue adipiscing
                  praesent nisl cras nunc luctus viverra nisi
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-purple-600 text-sm font-semibold leading-none text-white">
                4
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Cras nulla aliquet nam eleifend amet et</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
                  tristique et gravida. Quis nunc interdum gravida ullamcorper sed
                  integer. Quisque eleifend tincidunt vulputate libero
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
