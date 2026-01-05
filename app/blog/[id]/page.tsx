'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Car Rentals: Electric Vehicles Leading the Way",
    excerpt: "Explore how electric vehicles are revolutionizing the car rental industry and what it means for environmentally conscious travelers.",
    content: `The automotive industry is undergoing a massive transformation with electric vehicles at the forefront. This shift is not just changing how we think about personal transportation, but it's also revolutionizing the car rental industry in ways we never imagined.

Electric vehicles (EVs) are becoming increasingly popular among renters for several compelling reasons. First and foremost, they offer significant cost savings on fuel expenses. With rising gas prices and the relatively low cost of electricity, EV rentals can be up to 60% cheaper to operate than traditional gasoline vehicles.

Environmental concerns are another major factor driving this trend. Today's travelers are more environmentally conscious than ever before, and many are actively seeking ways to reduce their carbon footprint. Car rental companies are responding by expanding their EV fleets and offering green alternatives to traditional vehicles.

The technology behind EVs has also improved dramatically in recent years. Modern electric cars offer impressive range capabilities, with many models now able to travel over 300 miles on a single charge. This has largely eliminated the "range anxiety" that previously made many renters hesitant to choose electric vehicles.

Car rental companies are investing heavily in charging infrastructure at their locations. Many now offer on-site charging stations, and some even provide complimentary charging as part of their rental packages. This makes EV rentals more convenient and accessible than ever before.

The future looks bright for electric vehicle rentals. As battery technology continues to improve and charging infrastructure becomes more widespread, we can expect to see EVs become the default choice for many renters. This shift will not only benefit the environment but will also provide significant cost savings and a superior driving experience for customers.

For environmentally conscious travelers, the rise of EV rentals represents a perfect opportunity to explore new destinations while minimizing their environmental impact. It's a win-win situation that's reshaping the car rental industry for the better.`,
    author: "Sarah Johnson",
    date: "2024-12-15",
    category: "Technology",
    readTime: "5 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 2,
    title: "Top 10 Road Trip Destinations for 2025",
    excerpt: "Discover most breathtaking road trip routes that should be on every traveler's bucket list for the coming year.",
    content: `As we look ahead to 2025, road trips continue to be one of the most popular ways to explore new destinations. There's something uniquely freeing about hitting the open road with nothing but a map and a sense of adventure. Here are the top 10 road trip destinations that should be on every traveler's bucket list for 2025.

1. Pacific Coast Highway, California
This iconic route offers stunning ocean views, charming coastal towns, and some of the most spectacular scenery in the United States. Starting from San Francisco and ending in San Diego, this 650-mile journey is perfect for those who love dramatic cliffs, pristine beaches, and world-class cuisine.

2. Blue Ridge Parkway, Virginia & North Carolina
Spanning 469 miles through the Appalachian Mountains, this scenic drive offers breathtaking views, especially during fall when the foliage transforms into a vibrant tapestry of colors.

3. Route 66, Illinois to California
America's most famous highway, Route 66 stretches over 2,400 miles from Chicago to Santa Monica. This historic route is filled with nostalgia, quirky roadside attractions, and classic American diners.

4. Going-to-the-Sun Road, Montana
Located in Glacier National Park, this 50-mile road offers some of the most spectacular mountain scenery in North America. Open only during summer months, it's a must-see for nature lovers.

5. Overseas Highway, Florida
Connecting the Florida Keys, this 113-mile highway features 42 bridges, including the famous Seven Mile Bridge. The turquoise waters and tropical scenery make this one of America's most beautiful drives.

6. Tail of the Dragon, North Carolina & Tennessee
This 11-mile stretch of US 129 features 318 curves and is a favorite among motorcycle enthusiasts and sports car drivers. The challenging road winds through the Great Smoky Mountains.

7. Million Dollar Highway, Colorado
Part of the San Juan Skyway, this 25-mile stretch of US 550 offers jaw-dropping mountain views, steep cliffs, and no guardrails. It's not for the faint of heart but rewards brave drivers with unforgettable scenery.

8. Highway 1, Nova Scotia
This scenic route along Nova Scotia's southern shore features charming fishing villages, lighthouses, and some of the freshest seafood you'll ever taste.

9. Hana Highway, Maui, Hawaii
This 64-mile road features 620 curves and 59 bridges, taking you through lush rainforests, past waterfalls, and along stunning coastal cliffs.

10. Icefields Parkway, Alberta, Canada
Connecting Banff and Jasper National Parks, this 144-mile highway offers glacier views, turquoise lakes, and abundant wildlife sightings including bears, elk, and mountain goats.

Each of these destinations offers a unique experience and memories that will last a lifetime. Whether you're seeking adventure, relaxation, or simply want to see some of the world's most beautiful scenery, these road trip destinations should definitely be on your 2025 travel list.`,
    author: "Mike Chen",
    date: "2024-12-10",
    category: "Travel",
    readTime: "8 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 3,
    title: "How to Choose the Perfect Rental Car for Your Needs",
    excerpt: "A comprehensive guide to selecting the right vehicle for your next adventure, considering budget, space, and fuel efficiency.",
    content: `Choosing the right rental car can make or break your travel experience. With so many options available, it's easy to feel overwhelmed when trying to select the perfect vehicle for your needs. This comprehensive guide will help you make an informed decision that ensures comfort, safety, and value for money.

First, consider your travel purpose. Are you planning a business trip, family vacation, or romantic getaway? The type of trip will significantly influence your vehicle choice. Business travelers might prefer a compact or midsize sedan for fuel efficiency and easy parking, while families often need minivans or SUVs for space and comfort.

Next, evaluate your passenger and cargo requirements. If you're traveling solo or with one companion, a compact car might be sufficient. However, groups of four or more should consider larger vehicles. Don't forget to account for luggage space – a compact car might fit four people, but their luggage could be a challenge.

Budget is another crucial factor. While it's tempting to upgrade to a luxury vehicle, consider whether the extra cost is justified. Remember that rental rates vary significantly based on vehicle type, season, and location. Sometimes booking a slightly larger vehicle in advance can be more economical than upgrading at the counter.

Fuel efficiency should be high on your priority list, especially for long-distance trips. Compact cars typically offer the best mileage, while SUVs and trucks consume more fuel. However, newer hybrid and electric options are becoming increasingly available and can offer significant savings on fuel costs.

Consider the driving conditions you'll encounter. If you're planning to drive in snowy or mountainous regions, an all-wheel-drive vehicle might be worth the extra cost. For city driving with tight parking spaces, a compact car is usually the most practical choice.

Don't forget about comfort features, especially for longer trips. Features like cruise control, Bluetooth connectivity, GPS navigation, and comfortable seating can make a significant difference in your travel experience.

Insurance options are also important to understand. While your personal auto insurance might cover rental cars, it's worth checking the details. Additionally, consider whether you need supplemental insurance from the rental company.

Finally, read reviews and compare prices from different rental companies. Customer reviews can provide valuable insights into vehicle quality, customer service, and overall experience. Price comparison websites can help you find the best deals and available promotions.

By taking these factors into consideration, you'll be able to choose the perfect rental car that meets your specific needs and ensures a comfortable, enjoyable travel experience. Remember that the cheapest option isn't always the best value – focus on finding the right balance between cost, comfort, and functionality.`,
    author: "Emily Rodriguez",
    date: "2024-12-05",
    category: "Tips",
    readTime: "6 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 4,
    title: "The Rise of Subscription-Based Car Services",
    excerpt: "Learn about the growing trend of car subscription services and how they're changing traditional car ownership.",
    content: `Car subscription services are emerging as a flexible alternative to traditional car ownership, offering consumers the convenience of having a vehicle without the long-term commitment and financial burden of ownership. This innovative approach to personal transportation is gaining traction among urban dwellers, frequent travelers, and those who value flexibility over ownership.

The concept behind car subscription services is simple: instead of buying or leasing a car, subscribers pay a monthly fee that covers the vehicle, insurance, maintenance, and often roadside assistance. This all-inclusive model eliminates many of the hassles associated with car ownership, such as insurance paperwork, maintenance scheduling, and depreciation concerns.

Several factors are driving the growth of car subscription services. Urbanization is a major contributor, as city dwellers often don't need a car for daily commuting but still want access to vehicles for weekend trips or special occasions. The rising cost of car ownership, including purchase price, insurance, maintenance, and parking, is another significant factor pushing consumers toward subscription models.

Flexibility is perhaps the most appealing aspect of car subscriptions. Unlike traditional leases that lock you into a specific vehicle for several years, subscriptions typically allow you to switch between different types of vehicles based on your needs. Need an SUV for a family vacation one month and a compact car for city driving the next? Car subscriptions make this possible.

Major automotive manufacturers and startups alike are entering the subscription market. Companies like Volvo, Porsche, and BMW have launched their own subscription services, while startups like Fair and Canvas offer multi-brand options. This competition is driving innovation and improving service quality across the industry.

The subscription model also aligns well with the growing trend toward a sharing economy and sustainability. By maximizing vehicle utilization and reducing the total number of cars on the road, subscription services can contribute to more efficient resource use and potentially lower environmental impact.

However, car subscription services aren't without challenges. Regulatory issues, insurance complexities, and the need for sophisticated logistics management are all hurdles that companies must overcome. Additionally, the monthly costs can be higher than traditional ownership for those who drive frequently and keep vehicles for long periods.

Despite these challenges, the future looks bright for car subscription services. As technology continues to evolve and consumer preferences shift toward access over ownership, we can expect to see continued growth and innovation in this space. The integration of electric vehicles, autonomous driving technology, and advanced telematics will likely make subscription services even more attractive in the coming years.

For consumers, car subscription services represent a new way to think about personal transportation – one that prioritizes flexibility, convenience, and access over ownership. As this industry continues to mature, it may well become the preferred choice for a new generation of drivers who value experiences over possessions.`,
    author: "David Park",
    date: "2024-11-28",
    category: "Industry",
    readTime: "7 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 5,
    title: "Sustainable Travel: Eco-Friendly Car Rental Options",
    excerpt: "Discover how car rental companies are embracing sustainability and offering green alternatives for conscious travelers.",
    content: `Sustainability is no longer just a buzzword in the travel industry – it's becoming a fundamental consideration for travelers and service providers alike. Car rental companies are increasingly recognizing their role in promoting environmental responsibility and are implementing various initiatives to reduce their carbon footprint while offering eco-friendly options to conscious travelers.

The most visible change in the car rental industry's sustainability efforts is the rapid expansion of electric and hybrid vehicle fleets. Major rental companies are investing billions in adding EVs and hybrids to their fleets, recognizing that these vehicles produce significantly fewer emissions than traditional gasoline-powered cars. This shift not only helps reduce environmental impact but also meets growing consumer demand for greener transportation options.

Beyond vehicle selection, rental companies are implementing comprehensive sustainability programs across their operations. Many have adopted energy-efficient practices at their rental locations, including LED lighting, solar panels, and smart building management systems. These measures help reduce the energy consumption of rental facilities, which often operate 24/7.

Carbon offset programs are another popular initiative. Several rental companies now offer customers the option to offset the carbon emissions from their rental by contributing to environmental projects such as reforestation, renewable energy development, or methane capture. This allows travelers to mitigate their environmental impact even when using conventional vehicles.

Sustainable maintenance practices are also gaining traction. Rental companies are increasingly using eco-friendly cleaning products, recycling oil and other automotive fluids, and implementing water conservation measures in their car wash facilities. Some are even exploring biodegradable lubricants and recycled parts for vehicle maintenance.

The rise of car sharing and peer-to-peer rental platforms is contributing to sustainability by maximizing vehicle utilization. Rather than having cars sit idle for extended periods, these platforms ensure that vehicles are used more efficiently, reducing the overall number of cars needed to meet transportation demands.

Educational initiatives play a crucial role in promoting sustainable travel. Many rental companies now provide customers with information about eco-friendly driving techniques, such as smooth acceleration, proper tire inflation, and route planning to minimize fuel consumption. Some even offer incentives for customers who demonstrate fuel-efficient driving behavior.

Looking ahead, the future of sustainable car rentals looks promising. We can expect to see continued expansion of electric vehicle fleets, improved charging infrastructure, and innovative technologies that further reduce environmental impact. Some companies are experimenting with autonomous electric vehicles that could revolutionize urban mobility while dramatically reducing emissions.

For travelers, choosing an eco-friendly rental option is becoming easier than ever. When booking your next rental, consider selecting a hybrid or electric vehicle, participating in carbon offset programs, and practicing fuel-efficient driving habits. These small choices can collectively make a significant difference in reducing the environmental impact of your travels.

The car rental industry's commitment to sustainability reflects a broader shift toward responsible tourism. By embracing green practices and offering eco-friendly options, rental companies are helping travelers explore the world while protecting it for future generations.`,
    author: "Lisa Green",
    date: "2024-11-20",
    category: "Sustainability",
    readTime: "5 min read",
    imageUrl: "/images/hero-bg.jpg"
  },
  {
    id: 6,
    title: "Navigating International Car Rentals: What You Need to Know",
    excerpt: "Essential tips and considerations for renting cars abroad, from insurance requirements to driving regulations.",
    content: `Renting a car in a foreign country can be both exciting and challenging. While it offers the freedom to explore at your own pace, international car rentals come with unique considerations that require careful planning. This guide will help you navigate the complexities of renting cars abroad and ensure a smooth, stress-free experience.

First and foremost, understand the documentation requirements. Most countries require a valid driver's license from your home country, but many also require an International Driving Permit (IDP). The IDP serves as an official translation of your license and is recognized in over 150 countries. It's essential to obtain this document before your trip, as it cannot be issued once you're abroad.

Insurance is another critical consideration. Your personal auto insurance policy may not cover international rentals, and credit card coverage often has limitations abroad. Research your options carefully and consider purchasing additional coverage from the rental company. This might include collision damage waiver, liability insurance, and personal accident coverage. It's better to be adequately insured than to face unexpected costs in case of an accident.

Familiarize yourself with local driving laws and regulations. Traffic rules vary significantly between countries, and ignorance of local laws is not a valid excuse for violations. Research speed limits, right-of-way rules, parking regulations, and any unique driving customs. Some countries require different driving positions (left-hand traffic), while others have specific requirements for equipment like warning triangles or reflective vests.

Booking in advance is highly recommended, especially during peak travel seasons. International rentals can be more expensive than domestic ones, and prices can vary significantly between companies and locations. Compare prices online but also read reviews about local rental companies. Sometimes smaller, local companies offer better rates and more personalized service than international chains.

When picking up your rental vehicle, conduct a thorough inspection. Document any existing damage with photos or videos and ensure the rental company acknowledges these issues. This protects you from being held responsible for damage you didn't cause. Check that all safety equipment is present and functional, including spare tires, jack, and emergency tools.

Fuel policies vary internationally. Some companies require you to return the car with a full tank, while others offer pre-purchased fuel options. Understand the policy and factor fuel costs into your budget. In some countries, fuel types and quality may differ from what you're used to, so confirm the correct fuel type for your vehicle.

Navigation can be challenging in unfamiliar territories. While GPS devices are often available for rent, consider using offline maps on your smartphone or bringing a portable GPS device. International data roaming can be expensive, so having offline maps is a smart backup plan.

Emergency preparedness is crucial. Keep important phone numbers handy, including the rental company's emergency line, local emergency services, and your country's embassy or consulate. Understand the procedure for accidents or breakdowns, and consider purchasing roadside assistance coverage.

Finally, be aware of cultural differences in driving styles and road etiquette. What's considered normal in your home country might be aggressive or timid elsewhere. Stay alert, be patient, and adapt to local driving conditions. Remember that you're representing your country as a visitor, so drive responsibly and respectfully.

With proper planning and preparation, renting a car internationally can enhance your travel experience significantly. It offers unparalleled flexibility to explore off-the-beaten-path destinations and create your own itinerary. By understanding the requirements and challenges beforehand, you'll be well-equipped to handle any situation that arises and enjoy the freedom of the open road in a foreign land.`,
    author: "Tom Wilson",
    date: "2024-11-15",
    category: "Travel",
    readTime: "9 min read",
    imageUrl: "/images/hero-bg.jpg"
  }
];

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="text-center">
            <div className="text-sm font-semibold text-purple-900">Blog Article</div>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">{post.title}</h1>
            <div className="mt-2 text-xs text-gray-600">Home / Blog / {post.title}</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-2xl">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  <span>{post.author}</span>
                </div>
                <span className="mx-3">•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* Back to Blog Button */}
            <div className="mt-12 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-white font-medium transition-colors hover:bg-purple-700"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
