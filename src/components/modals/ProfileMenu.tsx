import { FaUsers, FaTools, FaCommentDots, FaMapMarkerAlt, FaLock, FaSignOutAlt } from 'react-icons/fa';

type ProfileMenuProps = {
  onClose: () => void;
};

const ProfileMenu = ({ onClose }: ProfileMenuProps) => (
  <>
    <div className="fixed inset-0 z-40" aria-hidden="true" onClick={onClose} />
    <div className="absolute right-0 top-12 z-50 w-90 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-4 border-2 rounded-lg bg-gray-100 m-4 border-gray-100">
        <div className="w-14 h-14 rounded-full bg-[#1e5f4a] text-white flex items-center justify-center text-3xl font-semibold">D</div>
        <div>
          <div className="text-xl font-semibold text-gray-900">Dylan Frank</div>
          <div className="text-sm text-gray-500">dylan96@mail.com</div>
        </div>
      </div>
      <div className="px-4 divide-y divide-gray-100">
        {[
          { label: 'Teams', icon: FaUsers },
          { label: 'Snagging', icon: FaTools },
          { label: 'Feedback', icon: FaCommentDots },
          { label: 'Geo-Bucket', icon: FaMapMarkerAlt },
          { label: 'Change password', icon: FaLock },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className="w-full text-lg text-left px-5 py-6 text-gray-800 font-medium hover:bg-gray-50 flex items-center gap-3"
          >
            <Icon className="w-6 h-6 text-gray-500" />
            <span>{label}</span>
          </button>
        ))}
        <button
          type="button"
          className="w-full text-left px-5 py-4 text-[#e23b35] font-semibold hover:bg-gray-50 flex items-center gap-3"
        >
          <FaSignOutAlt className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </>
);

export default ProfileMenu;
