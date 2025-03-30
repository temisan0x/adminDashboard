import React from "react";

const StatCard = ({
  icon,
  title,
  value,
  trend,
  bgColor = "bg-white",
  textColor = "text-gray-900",
  progressBar,
  children,
}) => {
  return (
    <div
      className={`${bgColor} p-6 rounded-2xl ${
        bgColor === "bg-white" ? "border" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className={`font-medium ${textColor}`}>{title}</span>
        </div>
        <button
          className={bgColor === "bg-white" ? "text-gray-400" : "text-white/80"}
        >
          •••
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className={`text-4xl font-bold ${textColor}`}>{value}</div>
        {trend && (
          <div className={trend.isPositive ? "text-green-500" : "text-red-500"}>
            <span
              className={`${
                trend.isPositive ? "bg-green-50" : "bg-red-50"
              } px-2 py-1 rounded-full text-sm`}
            >
              {trend.value}
            </span>
          </div>
        )}
      </div>

      {children}

      {progressBar && (
        <div className="mt-4 flex items-center gap-3">
          <div
            className={`flex-1 ${
              bgColor === "bg-white" ? "bg-gray-100" : "bg-emerald-500/30"
            } rounded-full h-2`}
          >
            <div
              className={`${
                bgColor === "bg-white" ? "bg-green-500" : "bg-white"
              } h-2 rounded-full`}
              style={{
                width: `${
                  (progressBar.value / (progressBar.total || 100)) * 100
                }%`,
              }}
            />
          </div>
          <div
            className={`text-sm whitespace-nowrap ${
              bgColor === "bg-white" ? "text-gray-500" : "text-white"
            }`}
          >
            {progressBar.today}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
