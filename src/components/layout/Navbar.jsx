import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiUserLine,
  RiCalendarLine,
  RiStethoscopeLine,
  RiUserStarLine,
  RiBuildingLine,
  RiMoneyDollarCircleLine,
  RiMedicineBottleLine,
  RiQuestionLine,
  RiSettings3Line,
  RiFileChartLine,
} from "react-icons/ri";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, icon, label }) => (
    <Link
      to={to}
      className={`flex items-center gap-3 p-2 rounded-md text-sm transition duration-150 ease-in-out
        ${
          isActive(to)
            ? "bg-teal-600 text-white"
            : "text-gray-600 hover:text-teal-600 hover:bg-gray-100"
        }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
  return (
    <div className="bg-white w-64 min-h-screen border-r border-gray-200 flex flex-col">
      <div className="mt-5 mb-3 border-gray-200 mx-auto">
        <div className="flex items-center justify-center space-x-2 ">
          <img
            src="public/assets/logo.jpeg"
            className="w-10 h-10 object-cover rounded-md"
          />
          <div>
            <h1 className="font-bold text-3xl">WeCare</h1>
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center mt-2 font-bold">
          MedicalAdmin Dashboard
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 mb-2 font-medium px-2">
              Main Menu
            </p>
            <NavLink to="/" icon={<RiDashboardLine />} label="Overview" />
            <NavLink to="/patient" icon={<RiUserLine />} label="Patient" />
            <NavLink
              to="/appointment"
              icon={<RiCalendarLine />}
              label="Appointment"
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500 mb-2 font-medium px-2">
              Other Menu
            </p>
            <NavLink
              to="/doctors"
              icon={<RiStethoscopeLine />}
              label="Doctors"
            />
            <NavLink
              to="/employees"
              icon={<RiUserStarLine />}
              label="Employees"
            />
            <NavLink
              to="/department"
              icon={<RiBuildingLine />}
              label="Department"
            />
            <NavLink
              to="/payment"
              icon={<RiMoneyDollarCircleLine />}
              label="Payment"
            />
            <NavLink
              to="/products"
              icon={<RiMedicineBottleLine />}
              label="Product & Stock"
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500 mb-2 font-medium px-2">
              Help & Settings
            </p>
            <NavLink
              to="/help"
              icon={<RiQuestionLine />}
              label="Help & Center"
            />
            <NavLink
              to="/settings"
              icon={<RiSettings3Line />}
              label="Settings"
            />
            <NavLink to="/reports" icon={<RiFileChartLine />} label="Report" />
          </div>
        </div>
      </div>

      {/* Dark mode toggle */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Dark mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex h-6 w-11 items-center rounded-full"
          >
            <span
              className={`${
                darkMode ? "bg-teal-600" : "bg-gray-200"
              } inline-block h-5 w-10 rounded-full transition`}
            />
            <span
              className={`${
                darkMode ? "translate-x-5" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
