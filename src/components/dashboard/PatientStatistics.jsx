import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const data = [
  { day: 'Monday', patient: 450, visit: 1000 },
  { day: 'Tuesday', patient: 450, visit: 692 },
  { day: 'Wednesday', patient: 180, visit: 501 },
  { day: 'Thursday', patient: 553, visit: 500 },
  { day: 'Friday', patient: 155, visit: 500 },
  { day: 'Saturday', patient: 150, visit: 280 },
  { day: 'Sunday', patient: 100, visit: 150 }
];

const PatientStatistics = () => {
  const [selected, setSelected] = React.useState();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
      <div className="p-6 rounded-2xl border  bg-white">
        <h2 className="font-semibold mb-4">Patient Statistics</h2>
        <div className="h-[400px] py-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Bar dataKey="visit" fill="#10B981">
                <LabelList dataKey="visit" position="top" />
                <LabelList dataKey="performanceavg" position="insideRight" />
              </Bar>
              <Bar dataKey="patient" fill="#FCD34D">
                <LabelList dataKey="patient" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 rounded-2xl border flex  bg-white">
        <div >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Calendar</h2>
          </div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="border rounded-lg p-3"
          />
        </div>
        <div className='px-10'>
          <div className="mt-4 space-y-2 ">
            <button className="text-sm text-gray-500">Activity Details</button>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-teal-300"></span>
              <span>DR. Nick Appointment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Dentist Meetup</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span>Jhon Surgery</span>
            </div>
          </div>

          <button variant="contained" className="w-full mt-4 bg-white border border-gray-300 py-3 relative top-24 text-black font-medium px-4 ">+ Add New</button>
        </div>
      </div>
    </div>
  );
};

export default PatientStatistics;
