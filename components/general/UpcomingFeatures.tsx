import { Zap, Code, FileCode2, Shield, Clock } from "lucide-react";

const upcomingFeatures = [
  {
    icon: <Code className="w-12 h-12 text-blue-600 mb-4" />,
    title: "npm Package",
    description:
      "Native JavaScript support with our upcoming npm package. Perfect for Node.js and frontend projects.",
    releaseDate: "Coming Q1 2024",
  },
  {
    icon: <FileCode2 className="w-12 h-12 text-blue-600 mb-4" />,
    title: "VS Code Extension",
    description:
      "Generate and update documentation directly from your favorite code editor with real-time previews.",
    releaseDate: "Coming Q1 2024",
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600 mb-4" />,
    title: "AI Code Chat",
    description:
      "Chat with your codebase using AI to get instant answers about your project structure and documentation.",
    releaseDate: "Coming Q2 2024",
  },
];

const UpcomingFeatures = () => {
  return (
    <section className="w-full px-4 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Coming Soon
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Future Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exciting new features and platforms coming to make documentation even better.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              <div className="mt-4 inline-flex items-center text-sm text-blue-600">
                <Clock className="w-4 h-4 mr-2" />
                {feature.releaseDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
