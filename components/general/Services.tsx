import { CheckCircle2, Code, GitBranch } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Code Analysis",
    description: "Deep analysis of your codebase to generate accurate and comprehensive documentation.",
    features: ["Multiple language support", "Architecture detection", "Dependency mapping"],
  },
  {
    icon: <GitBranch className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Version Control Integration",
    description: "Seamless integration with your version control system for automated documentation updates.",
    features: ["GitHub integration", "Automated commits", "Branch synchronization"],
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-xl border bg-white hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
