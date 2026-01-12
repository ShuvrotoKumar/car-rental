# Car Rental Application

A modern, responsive car rental web application built with Next.js 16, React 19, and Tailwind CSS. This application provides a seamless user experience for browsing and booking rental vehicles.

## 🚗 Features

- **Vehicle Gallery**: Browse a collection of rental cars with detailed information
- **Vehicle Details Page**: View comprehensive car information with image gallery
- **Interactive Image Gallery**: Click thumbnails to switch between different car views
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth transitions
- **Authentication System**: User login and registration functionality
- **Contact & Booking**: Integrated contact form for vehicle bookings
- **Blog Section**: Content management for automotive articles
- **FAQ Page**: Frequently asked questions for customer support

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React Icons, React Icons
- **Alerts**: SweetAlert2 for user notifications
- **Development**: ESLint for code quality

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car-rental
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 📁 Project Structure

```
car-rental/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages (login, register)
│   ├── (dashboard)/       # Dashboard pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── gallery/           # Gallery page
│   ├── vehicles/          # Vehicle listing and details
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components
├── lib/                   # Utility functions and configurations
├── public/               # Static assets (images, icons)
├── .next/                # Next.js build output
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 🎨 Key Features Implementation

### Vehicle Gallery System
- Dynamic vehicle database with multiple car types
- Responsive grid layout for vehicle cards
- Price display and basic vehicle information

### Vehicle Details Page
- Comprehensive car information display
- **Interactive Image Gallery**: 
  - Main car image display (600px-700px height)
  - 4 thumbnail images below the main image
  - Click-to-switch functionality with smooth transitions
  - Active thumbnail highlighting with purple border
  - Hover effects for better user interaction

### Authentication Flow
- User registration and login functionality
- Protected routes for authenticated users
- Session management

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory for environment-specific configurations.

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configurations for consistent styling and design system.

### TypeScript
Full TypeScript support with strict type checking for better code quality and developer experience.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
```bash
npm run build
npm run start
```

The application will be available on the port specified in your production environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions, please:
- Check the FAQ section in the application
- Contact support through the contact form
- Open an issue on GitHub

## 🔮 Future Enhancements

- Real-time booking system
- Payment integration
- Vehicle availability calendar
- User dashboard with booking history
- Admin panel for fleet management
- Multi-language support
- Advanced filtering and search
- Vehicle comparison feature

---

Built with ❤️ using Next.js and modern web technologies.
