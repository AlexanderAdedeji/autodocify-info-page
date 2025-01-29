const TrustedBySection = () => {
    const brands = [
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      },
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo.svg.png",
      },
      {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      },
    ];
  
    return (
      <section className="w-full px-4 py-12 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium mb-8 text-gray-500 dark:text-gray-400">
            TRUSTED BY DEVELOPERS FROM
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-6 opacity-50 hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBySection;
  