import type { IconType } from 'react-icons';

interface OverviewCardProps {
  icon: IconType;
  title: string;
  iconClassName?: string;
  iconWrapperClassName?: string;
  stats: {
    label: string;
    value: string;
  }[];
  showViewAll?: boolean;
}

const OverviewCard = ({
  icon: Icon,
  title,
  iconClassName,
  iconWrapperClassName,
  stats,
  showViewAll = true,
}: OverviewCardProps) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between bg-[#fbfbfc]">
        <div className="flex items-center gap-2">
          <span
            className={`flex items-center justify-center ${iconWrapperClassName ?? 'text-2xl'}`}
          >
            <Icon className={` ${iconClassName ?? 'text-[#4f6ef7] font-bold'}`} />
          </span>
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
        {showViewAll && (
          <a href="#" className="text-sm text-[#4f6ef7] hover:underline">
            View all &gt;
          </a>
        )}
      </div>
      <div className="border-t-2 border-gray-200" />
      <div className="px-6 py-5 grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            <div className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
