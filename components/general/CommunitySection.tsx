import { MessageSquare, Github } from "lucide-react";

const CommunitySection = () => {
  const communityLinks = [
    {
      label: "Join Discord",
      href: "#",
      icon: <MessageSquare className="w-5 h-5 ml-2" />,
    },
    {
      label: "GitHub Discussions",
      href: "#",
      icon: <Github className="w-5 h-5 ml-2" />,
    },
  ];

  return (
    <section className="w-full px-4 py-20 bg-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Our Community
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Connect with 1,000+ developers using AutoDocify
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {communityLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center"
            >
              {link.label}
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
