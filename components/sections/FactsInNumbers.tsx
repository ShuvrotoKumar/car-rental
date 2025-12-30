import { FaCar, FaUsers, FaCalendarAlt, FaRoute } from "react-icons/fa";
import { 
  SiBmw, 
  SiMercedes, 
  SiAudi, 
  SiToyota, 
  SiHonda, 
  SiFord, 
  SiTesla, 
  SiNissan, 
  SiChevrolet, 
  SiVolvo, 
  SiHyundai, 
  SiKia 
} from "react-icons/si";

export default function FactsInNumbers() {
  const items = [
    {
      value: "540+",
      label: "Cars",
      icon: <FaCar />,
      logo: (
        <div className="flex items-center gap-2">
          <SiBmw className="text-gray-400" size={28} />
          <SiMercedes className="text-gray-400" size={28} />
          <SiAudi className="text-gray-400" size={28} />
        </div>
      ),
    },
    {
      value: "20k+",
      label: "Customers",
      icon: <FaUsers />,
      logo: (
        <div className="flex items-center gap-2">
          <SiToyota className="text-gray-400" size={28} />
          <SiHonda className="text-gray-400" size={28} />
          <SiFord className="text-gray-400" size={28} />
        </div>
      ),
    },
    {
      value: "25+",
      label: "Years",
      icon: <FaCalendarAlt />,
      logo: (
        <div className="flex items-center gap-2">
          <SiTesla className="text-gray-400" size={28} />
          <SiNissan className="text-gray-400" size={28} />
          <SiChevrolet className="text-gray-400" size={28} />
        </div>
      ),
    },
    {
      value: "20m+",
      label: "Miles",
      icon: <FaRoute />,
      logo: (
        <div className="flex items-center gap-2">
          <SiVolvo className="text-gray-400" size={28} />
          <SiHyundai className="text-gray-400" size={28} />
          <SiKia className="text-gray-400" size={28} />
        </div>
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
                className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{item.value}</div>
                    <div className="text-[10px] leading-4 text-gray-500">{item.label}</div>
                  </div>
                </div>
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
