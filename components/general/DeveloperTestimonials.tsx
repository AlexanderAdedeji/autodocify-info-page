import { Star } from "lucide-react";
import TestimonialsSection from "./TestimonialSection";


const DeveloperStatistics = [
  { value: "50,000+", label: "Developers using AutoDocify" },
  { value: "1M+", label: "Documents generated" },
  { value: "98%", label: "Customer satisfaction" },
];

const DeveloperTestimonials = () => {
  return (
    <section className="w-full px-4 py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by Developers
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            What Developers Are Saying
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who are saving time and improving their documentation with AutoDocify.
          </p>
        </div>

        <TestimonialsSection />

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {DeveloperStatistics.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTestimonials;


