import { Users, Github, FileText, Clock, Zap } from "lucide-react";

const StatsOverview: React.FC = () => {
  const stats = [
    {
      id: "community",
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Active Community",
      value: "50,000+",
      description: "Active developers",
      extra: (
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://randomuser.me/api/portraits/${i % 2 ? "men" : "women"}/${i * 20}.jpg`}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
      ),
      colSpan: true,
    },
    {
      id: "github",
      icon: <Github className="w-5 h-5 text-primary" />,
      title: "GitHub",
      value: "2.4k",
      description: "Stars on GitHub",
    },
    {
      id: "docs",
      icon: <FileText className="w-5 h-5 text-primary" />,
      title: "Docs",
      value: "1M+",
      description: "Docs generated",
    },
    {
      id: "timeSaved",
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Time Saved",
      value: "5M+",
      description: "Hours saved",
    },
    {
      id: "speed",
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: "Speed",
      value: "10x",
      description: "Faster docs",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(({ id, icon, title, value, description, extra, colSpan }) => (
        <div
          key={id}
          className={`p-6 rounded-theme border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between ${
            colSpan ? "col-span-2" : ""
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <span className="font-medium text-gray-900 dark:text-white">
                {title}
              </span>
            </div>
            <div className="text-2xl font-bold text-primary">{value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </div>
          </div>
          {extra && <div>{extra}</div>}
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
