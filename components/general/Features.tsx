import { FileText, FileCode2, TestTube, FileJson } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-12 h-12 text-blue-600 mb-4" />,
    title: "README Generation",
    description:
      "Generate comprehensive README files automatically from your codebase.",
  },
  {
    icon: <FileCode2 className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Technical Docs",
    description:
      "Create detailed technical documentation with architecture insights.",
  },
  {
    icon: <TestTube className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Test Generation",
    description:
      "Auto-generate test files with comprehensive test cases.",
  },
  {
    icon: <FileJson className="w-12 h-12 text-blue-600 mb-4" />,
    title: "Swagger Docs",
    description:
      "Generate Swagger documentation for your APIs automatically.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full px-4 py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to create and maintain beautiful documentation
            for your projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border dark:border-gray-700 hover:dark:border-gray-600 dark:bg-gray-800 hover:shadow-lg transition-all"
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

export default FeaturesSection;
