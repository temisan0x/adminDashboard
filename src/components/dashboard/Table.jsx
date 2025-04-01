import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";

function Table() {
    const patients = [
        { id: "#FUP121312424", name: "Isagi Yoichi", age: 20, date: "25 Dec 2023", time: "08:30 PM", type: "FUP+ECG", status: "Pending" },
        { id: "#121312424", name: "Kaiser Brown", age: 23, date: "01 Dec 2023", time: "12:30 PM", type: "FUP", status: "Confirmed" },
    ];
    return (
        <div className="mt-6 bg-white p-4 rounded-xl shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold mb-2">All Patients</h3>
                <div className="flex items-center gap-2 mb-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="border p-2 rounded-lg pl-10"
                            placeholder="Search Patient"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-500" />
                    </div>
                    <button className="flex items-center gap-2 text-black px-4 py-2 rounded-lg shadow transition hover:bg-green-500">
                        Filter
                        <IoFilterOutline className="text-black text-lg" />
                    </button>

                </div>
            </div>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="border border-gray-100 text-left text-gray-600 uppercase text-sm">
                        <th className="p-2 w-10">
                            <input type="checkbox" className="form-checkbox h-4 w-4" />
                        </th>
                        <th className="p-2">No</th>
                        <th className="p-2">ID</th>
                        <th className="p-2">Patient Name</th>
                        <th className="p-2">Age</th>
                        <th className="p-2">Created Date</th>
                        <th className="p-2">Time</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index} className="border-t">
                            <td className="p-2">
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                            </td>
                            <td className="p-2">{String(index + 1).padStart(2, "0")}</td> {/* Numbered List */}
                            <td className="p-2">{patient.id}</td>
                            <td className="p-2 flex items-center gap-2">
                                <FaRegCircleUser />
                                {patient.name}
                            </td>
                            <td className="p-2">{patient.age}</td>
                            <td className="p-2">{patient.date}</td>
                            <td className="p-2">{patient.time}</td>
                            <td className="p-2">{patient.type}</td>
                            <td className="p-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${patient.status === "Pending"
                                        ? "bg-yellow-100 text-yellow-600"
                                        : "bg-green-100 text-green-600"
                                        }`}
                                >
                                    {patient.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
