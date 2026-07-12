import { TrendingUp } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  change,
}) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon className="text-white" size={28} />
        </div>

      </div>

      <div className="mt-5 flex items-center gap-2">

        <TrendingUp
          size={18}
          className="text-green-500"
        />

        <span className="font-medium text-green-600">
          {change}
        </span>

        <span className="text-slate-500 text-sm">
          this month
        </span>

      </div>

    </div>
  );
};

export default StatCard;