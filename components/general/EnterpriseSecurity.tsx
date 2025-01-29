import { Shield, Lock } from "lucide-react";

const EnterpriseSecurity = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Zero Code Storage",
      description:
        "We never store your source code. All processing happens in memory.",
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-600 mb-4" />,
      title: "OAuth 2.0",
      description:
        "Secure access to private repositories with industry-standard authentication.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600 mb-4" />,
      title: "GDPR Compliant",
      description: "Full compliance with data protection regulations.",
    },
  ];

  return (
    <section className="w-full px-4 py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your code security is our top priority
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSecurity;
