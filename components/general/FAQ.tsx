import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqList = [
  {
    question: "How does AutoDocify work?",
    answer:
      "AutoDocify uses advanced AI to analyze your codebase, understanding its structure, dependencies, and patterns. It then generates comprehensive documentation that follows best practices and maintains consistency.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Currently, AutoDocify supports Python, JavaScript, TypeScript, Java, and Go. More languages will be added soon.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="w-full px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && <div className="px-6 py-4 border-t text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
