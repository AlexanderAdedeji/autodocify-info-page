import { Terminal, Code, ArrowRight, Book, CheckCircle2, Shield, Star } from "lucide-react";
import StatsOverview from "./StatsOverview";

const Hero = () => {
  return (
    <section className="w-full px-4 pt-10 pb-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Badges */}
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
              <Terminal className="w-4 h-4 mr-2" />
              Available on PyPI
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm">
              <Code className="w-4 h-4 mr-2" />
              Coming to npm
            </div>
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
          {/* Save 20+ Hours Monthly on Documentation */}

          Automate Your Code Documentation with AI 🚀
          </h1>
          {/* Subheading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          AutoDocify CLI transforms your code into structured, professional documentation in seconds. Ideal for open-source projects, startups, and enterprise teams.

          {/* AutoDocify uses advanced AI to analyze your codebase and generate comprehensive documentation in seconds. Join 50,000+ developers who trust us. */}
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a
              href="https://pypi.org/project/autodocify-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-lg text-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center"
            >
              View Docs
              <Book className="w-5 h-5 ml-2" />
            </a>
          </div>
          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              Enterprise-grade security
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-green-500 mr-2" />
              4.9/5 rating on GitHub
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div >

          <StatsOverview/>
          {/* <img
            src="https://illustrations.popsy.co/white/developer.svg"
            alt="Developer illustration"
            className="w-full"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
