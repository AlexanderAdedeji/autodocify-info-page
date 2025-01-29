import { Mail } from "lucide-react";

const StayUpdated = () => {
  return (
    <section className="w-full px-4 py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest updates about AutoDocify and documentation best practices.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center">
            Subscribe
            <Mail className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayUpdated;
