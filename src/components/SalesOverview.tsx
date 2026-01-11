import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { FaChevronLeft, FaChevronRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SalesOverview = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1 Year');

  const chartData = [
    { month: 'Jan', blue: 32, green: 18, red: 12 },
    { month: 'Feb', blue: 10, green: 28, red: 8 },
    { month: 'Mar', blue: 18, green: 6, red: 10 },
    { month: 'Apr', blue: 22, green: 12, red: 6 },
    { month: 'May', blue: 10, green: 8, red: 7 },
    { month: 'Jun', blue: 40, green: 48, red: 14 },
    { month: 'Jul', blue: 26, green: 34, red: 16 },
    { month: 'Aug', blue: 14, green: 20, red: 12 },
    { month: 'Sep', blue: 38, green: 35, red: 12 },
  ];

  const metrics = [
    {
      label: 'Total Inflow',
      value: '₦120,000,000.00',
      change: '+2.5%',
      trend: 'up',
      valueClassName: 'text-[#4f6ef7]',
    },
    {
      label: 'MRR',
      value: '₦50,000,000.00',
      change: '+2.5%',
      trend: 'up',
      valueClassName: 'text-[#10b981]',
    },
    {
      label: 'Commission Revenue',
      value: '₦200,000,000.00',
      change: '+0.5%',
      trend: 'up',
      valueClassName: 'text-[#14b8a6]',
    },
    {
      label: 'GMV',
      value: '₦100,000,000.00',
      change: '-0.5%',
      trend: 'down',
      valueClassName: 'text-[#ef4444]',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
            <div className="mt-1 text-sm text-gray-500">Showing overview Jan 2022 - Sep 2022</div>
          </div>

          <button
            type="button"
            className="px-8 py-3 rounded-full border-2 border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View Transactions
          </button>
        </div>

        <div className="mt-3 flex items-center justify-end">
          <div role="tablist" aria-label="Sales overview period" className="flex items-center gap-7">
            {(['1 Week', '1 Month', '1 Year'] as const).map((period) => {
              const selected = selectedPeriod === period;

              return (
                <button
                  key={period}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setSelectedPeriod(period)}
                  className={`text-sm font-normal transition-colors ${selected
                      ? 'bg-gray-100 text-gray-900 font-semibold px-5 py-2 rounded-lg'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {period}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-200" />

      <div className="w-full p-3 grid grid-cols-2 ">
        <div className=" pl-3 pr-6">
          <div className="relative">
            <button
              type="button"
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 z-10"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>

            <button
              type="button"
              aria-label="Next"
              className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 z-10"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>

            <div className="h-45 w-full border-r border-gray-200 pr-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#e5e7eb" vertical={false} />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                  />
                  <YAxis
                    stroke="#6b7280"
                    domain={[0, 50]}
                    tickFormatter={(value) => `${value}m`}
                    tickLine={true}
                    axisLine={true}
                    tick={{ fontSize: 11 }}
                  />
                  <Bar dataKey="blue" fill="#4f6ef7" radius={[3, 3, 0, 0]} barSize={4} />
                  <Bar dataKey="green" fill="#10b981" radius={[3, 3, 0, 0]} barSize={4} />
                  <Bar dataKey="red" fill="#ef4444" radius={[3, 3, 0, 0]} barSize={4} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className=" pl-2 w-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            {metrics.map((metric, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 bg-white p-3">
                <div className={`text-[19px] font-semibold ${metric.valueClassName}`}>{metric.value}</div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="text-[10px] font-bold text-gray-600">{metric.label}</div>

                  <div className="inline-flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center ${metric.trend === 'up' ? 'bg-[#10b981]' : 'bg-[#ef4444]'
                        }`}
                    >
                      {metric.trend === 'up' ? (
                        <FaArrowUp className="w-2.5 h-2.5 text-white" />
                      ) : (
                        <FaArrowDown className="w-2.5 h-2.5 text-white" />
                      )}
                    </span>
                    <span
                      className={`text-xs font-semibold ${metric.trend === 'up' ? 'text-[#10b981]' : 'text-[#ef4444]'
                        }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
