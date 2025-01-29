import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqList = [
    {
      question: "What is AutoDocify CLI?",
      answer:
        "AutoDocify CLI is an AI-powered command-line tool that automates the generation of README files, API documentation, test cases, and technical references directly from your codebase.",
    },
    {
      question: "How do I install AutoDocify CLI?",
      answer:
        "You can install AutoDocify CLI globally using pip. Run the following command:\n\n```sh\npip install autodocify\n```",
    },
    {
      question: "Which programming languages does AutoDocify CLI support?",
      answer:
        "AutoDocify CLI currently supports Python, JavaScript, TypeScript, Java, and Go. More languages, such as Rust and C++, are planned for future releases.",
    },
    {
      question: "How do I generate a README file using AutoDocify CLI?",
      answer:
        "After installing AutoDocify, navigate to your project folder and run:\n\n```sh\nautodocify generate readme\n```\n\nThis will create a structured README file based on your project’s code, dependencies, and comments.",
    },
    {
      question: "Does AutoDocify store or upload my code?",
      answer:
        "No, AutoDocify processes all documentation locally on your machine. It does not store, upload, or share any part of your codebase, ensuring maximum privacy and security.",
    },
    {
      question: "Can AutoDocify integrate with CI/CD pipelines?",
      answer:
        "Yes! You can automate documentation generation within your CI/CD workflows. For example, in GitHub Actions, you can add a step like this:\n\n```yaml\n- name: Generate Documentation\n  run: autodocify generate docs\n```",
    },
    {
      question: "How do I update or customize the generated documentation?",
      answer:
        "You can provide a custom configuration file (`autodocify.json`) in your project root to modify the output format, exclude specific files, or change documentation structure. Run:\n\n```sh\nautodocify config init\n```\n\nTo create a default configuration file.",
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
