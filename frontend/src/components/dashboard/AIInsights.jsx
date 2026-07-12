import { Sparkles, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    color: "text-green-600",
    title: "Revenue Growth",
    description:
      "Revenue increased by 12% compared to last month. Sales growth is driven primarily by Electronics.",
  },
  {
    icon: AlertTriangle,
    color: "text-orange-500",
    title: "Attention Required",
    description:
      "Furniture sales declined by 8%. Consider reviewing pricing or promotional campaigns.",
  },
  {
    icon: Lightbulb,
    color: "text-blue-600",
    title: "AI Recommendation",
    description:
      "Focus marketing efforts on high-value customers in Hyderabad and Bangalore to maximize revenue.",
  },
];

const AIInsights = () => {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
          <Sparkles size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            AI Business Insights
          </h2>

          <p className="text-sm text-slate-500">
            AI-generated recommendations based on business data.
          </p>
        </div>

      </div>

      <div className="space-y-5">

        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:bg-slate-50 transition"
            >
              <Icon className={item.color} size={28} />

              <div>
                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default AIInsights;