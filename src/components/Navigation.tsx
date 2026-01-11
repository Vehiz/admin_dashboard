import {
  FiHome,
  FiBriefcase,
  FiUser,
  FiFileText,
  FiClipboard,
  FiCheckSquare,
} from 'react-icons/fi';
import { PiScroll, PiArticleThin, PiToolboxLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";

const Navigation = () => {
  const navItems = [
    { icon: MdHomeFilled, label: 'Dashboard', active: true },
    { icon: PiToolboxLight, label: 'Listings', active: false },
    { icon: CiUser, label: 'Users', active: false },
    { icon: PiArticleThin, label: 'Request', active: false },
    { icon: PiScroll, label: 'Applications', active: false },
    { icon: FiCheckSquare, label: 'Tasks', active: false },
  ];

  return (
    <nav className=" bg-white border-b border-gray-100 border-t border-[#1e5f4a]">
      <div className="mx-auto max-w-[1440px] w-full px-10">
        <div className="flex items-center justify-between py-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                type="button"
                className={`flex items-center gap-2 transition-colors ${
                  item.active
                    ? 'bg-[#dbe9e3] text-[#1e5f4a] px-8 py-3 rounded-xl'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-6 h-6 ${item.active ? 'text-[#1e5f4a]' : 'text-gray-900'}`} />
                <span className={`text-base ${item.active ? 'font-semibold' : 'font-medium text-gray-700'}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
