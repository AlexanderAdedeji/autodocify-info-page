import { CheckCircle2 } from "lucide-react";

const WhyAutoDocify = () => {
  return (
    <section className="w-full px-4 py-20 bg-white dark:bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://illustrations.popsy.co/white/product-launch.svg"
            alt="About illustration"
            className="w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Why AutoDocify?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We understand the challenges developers face with documentation.
            AutoDocify was born from the need to make documentation effortless
            and maintainable.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "Save Development Time",
                description: "Focus on coding while we handle the documentation.",
              },
              {
                title: "AI-Powered Insights",
                description:
                  "Advanced AI analyzes your code to generate meaningful documentation.",
              },
              {
                title: "Always Up-to-Date",
                description: "Documentation stays synchronized with your codebase.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutoDocify;
