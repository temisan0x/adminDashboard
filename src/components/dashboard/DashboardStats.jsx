import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import StatCard from "./StatCard";

const DashboardStats = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Alexandro👋</h1>
          <p className="text-gray-500 text-sm">
            there is the latest update for the last 7 days, check now
          </p>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>Last Week</option>
          </select>
          <button className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          icon={<AiFillContacts size={24} color="white" />}
          title="Overall Visitors"
          value="10,525"
          trend={{ value: "+15.2%", isPositive: true }}
          bgColor="bg-[#2F8A80]"
          textColor="text-white"
          progressBar={{ value: 75, today: "1,345 today" }}
        >
          <div className="text-sm text-emerald-100 mt-3">
            Data obtained for the last 7 days from 5,567 visitor to 7,523 visitor
          </div>
        </StatCard>

        <StatCard
          title="Total Patient"
          value="5,715"
          trend={{ value: "+10.4%", isPositive: true }}
        >
          <div className="flex items-center gap-4 mt-5">
            <img
              src="public/assets/stats.png"
              className="w-20 h-auto object-contain"
            />
            <p className="text-gray-600 text-sm">
              Increase in data by 500 implements in the last 7 days
            </p>
          </div>
        </StatCard>

        <StatCard
          title="Surgery"
          value="523"
          trend={{ value: "+14%", isPositive: true }}
          progressBar={{ value: 66, today: "1,345 today" }}
        >
          <div className="text-sm text-gray-500 mt-5">
            Visitor data obtained for the last 7 days from 15,256 to 15,751
          </div>
        </StatCard>

        <StatCard
          title="Overall Room"
          value="221"
          trend={{ value: "+14%", isPositive: true }}
        >
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2">
                <div className="bg-sky-400 text-white p-2 rounded-full">
                  <FaDoorOpen size={14} />
                </div>
                General Room
              </span>
              <span>110</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2">
                <div className="bg-teal-600 text-white p-2 rounded-full">
                  <FaDoorClosed size={14} />
                </div>
                Private Room
              </span>
              <span>111</span>
            </div>
          </div>
        </StatCard>
      </div>
    </div>
  );
};

export default DashboardStats;
