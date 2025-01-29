import { CheckCircle2, MessageSquare, Star } from "lucide-react";
import { useState } from "react";

const LeaveAReview = () => {
  return (
    <section className="w-full px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Share Your Experience
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Leave a Review
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Help others discover how AutoDocify can transform their documentation workflow.
          </p>
        </div>
        <ReviewForm />
      </div>
    </section>
  );
};

export default LeaveAReview;




const ReviewForm = () => {
    const [rating, setRating] = useState<number>(5);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [submitted, setSubmitted] = useState<boolean>(false);
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={`max-w-2xl mx-auto ${submitted ? "pointer-events-none opacity-50" : ""}`}>
      {submitted && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg">
          Thank you for your review!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Your Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(star)}
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Role & Company
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Senior Developer at Google"
            className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Your Review
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Share your experience with AutoDocify..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          Submit Review
          <CheckCircle2 className="w-5 h-5 ml-2" />
        </button>
      </form>
    </div>
  );
};


