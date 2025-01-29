'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Kim",
    role: "Senior Engineer at Spotify",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "AutoDocify's test generation feature is incredible. It saved our team weeks of work and helped us maintain 90%+ code coverage. The AI understands our codebase better than some of our junior devs!",
  },
  {
    name: "Sarah Chen",
    role: "Tech Lead at Stripe",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The Swagger documentation generation is a game-changer. What used to take days now happens in seconds. Our API documentation is always up-to-date and perfectly formatted.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Open Source Maintainer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "As an open-source maintainer, AutoDocify has been invaluable. The README generation and technical docs have made our project more accessible to new contributors.",
  },
  {
    name: "Emily Thompson",
    role: "DevOps Engineer at Netflix",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "The CI/CD integration is flawless. Our documentation automatically updates with every deployment, and the team loves how it maintains consistency across all our services.",
  },
  {
    name: "Alex Martinez",
    role: "CTO at TechStart",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    quote:
      "We've implemented AutoDocify across all our development teams. The standardization and automation of documentation have significantly improved our development workflow.",
  },
  {
    name: "Lisa Wang",
    role: "Senior Developer at Microsoft",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "The technical documentation feature is outstanding. It automatically captures our architecture decisions and makes it easy for new team members to understand our system.",
  },
  {
    name: "James Wilson",
    role: "Lead Engineer at Amazon",
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    quote:
      "AutoDocify has transformed how we handle documentation. The AI's ability to understand complex codebases and generate accurate docs is remarkable.",
  },
  {
    name: "Sophia Lee",
    role: "API Developer at Twilio",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    quote:
      "Managing API documentation used to be a pain point for us. With AutoDocify's Swagger generation, our API docs are always in sync with our code.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback(
    (index: number) => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = container.scrollWidth / testimonials.length;
        container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
        setCurrentIndex(index);
      }
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      scrollTo((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, scrollTo]);

  return (
    <div className="relative">
      {/* Testimonial Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-[400px] p-8 rounded-xl border snap-center 
            border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all 
              ${i === currentIndex ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500"}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
