import React from 'react'

const Services = () => {
  const services = [
    {
      title: "SaaS Tools",
      description: "Custom software-as-a-service solutions tailored to your business needs with scalable architecture and modern tech stack.",
      icon: "🔧"
    },
    {
      title: "Admin Panels",
      description: "Powerful and intuitive admin dashboards with comprehensive controls, analytics, and user management systems.",
      icon: "⚙️"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment integration, inventory management, and shopping cart functionality.",
      icon: "🛒"
    },
    {
      title: "Payment Integration",
      description: "Secure payment gateways integration supporting multiple payment methods and currencies with fraud protection.",
      icon: "💳"
    },
    {
      title: "API Development",
      description: "Custom API development and integration services with comprehensive documentation and security measures.",
      icon: "🔌"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup and management with monitoring and optimization services.",
      icon: "☁️"
    }
  ];

  return (
    <div className="bg-vibe py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-casual mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Comprehensive digital solutions to help your business grow and succeed in the modern tech landscape
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-vibe/50 backdrop-blur-sm p-6 rounded-lg 
                     border border-white/10 hover:border-casual/50
                     transform hover:-translate-y-2 transition-all duration-300
                     shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-casual/20
                     group cursor-pointer"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300
                          bg-casual/10 w-16 h-16 rounded-full flex items-center justify-center
                          group-hover:bg-casual/20">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-casual 
                         transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services