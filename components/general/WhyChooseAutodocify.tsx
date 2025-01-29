const WhyChooseAutoDocify = () => {
    const impactStats = [
      {
        value: "50%",
        description: "Reduction in onboarding time for new developers",
      },
      {
        value: "10x",
        description: "Faster documentation generation compared to manual writing",
      },
      {
        value: "95%",
        description: "Of users report improved documentation quality",
      },
    ];
  
    return (
      <section className="w-full px-4 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Developers Choose AutoDocify
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Measurable impact on your development workflow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseAutoDocify;
  