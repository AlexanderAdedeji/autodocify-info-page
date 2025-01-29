const TimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      year: "2021",
      title: "AutoDocify is Born",
      description:
        "Started with a simple README generator, built by developers tired of writing documentation.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description:
        "Launched our AI-powered documentation engine, revolutionizing how teams create docs.",
    },
    {
      year: "2023",
      title: "Global Impact",
      description:
        "Reached 50,000+ developers worldwide, generating over 1M+ documentation files.",
    },
  ];

  return (
    <section className="w-full px-4 py-20">
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Our Journey
        </h3>
        <div className="space-y-8">
          {timelineEvents.map(({ year, title, description }, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-gray-600 dark:text-gray-300"
            >
              <div className="w-20 font-bold text-blue-600">{year}</div>
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              <div>
                <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                  {title}
                </h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
