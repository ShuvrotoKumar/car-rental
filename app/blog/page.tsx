import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">Blog</div>
            <div className="mt-2 text-xs text-gray-500">Home / Blog</div>
          </div>

          <div className="mt-12 rounded-3xl bg-gray-50 p-10 text-center text-sm text-gray-600">
            Blog page
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
