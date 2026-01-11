import { useState } from 'react';

import Calculator from '../assets/icons/calculator.png';
import Calendar from '../assets/icons/calendar.png';
import Search from '../assets/icons/document-text.png';
import Marketplace from '../assets/icons/shop.png';
import Wallet from '../assets/icons/wallet-2.png';
import Logo from '../assets/icons/Group.png';

import ProfileMenu from './modals/ProfileMenu';
import BudgetModal from './modals/BudgetModal';
import CalendarModal from './modals/CalendarModal';

const Header = () => {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const baseAction = 'rounded-lg flex items-center justify-center transition-colors';
  const hoverSoft = 'hover:bg-white/10';
  const sizes = {
    large: 'w-12 h-12',
    small: 'w-9 h-9',
  };
  const budgetVariant = 'text-white border border-white/15 bg-white/10 hover:bg-white/15';

  const headerActions = [
    {
      icon: Calculator,
      label: 'Budgeting',
      className: `${sizes.large} ${baseAction} ${budgetVariant}`,
      onClick: () => setShowBudgetModal(true),
    },
    {
      icon: Calendar,
      label: 'Calendar',
      className: `${sizes.large} ${baseAction} ${hoverSoft}`,
      onClick: () => setShowCalendarModal(true),
    },
    {
      icon: Search,
      label: 'Search Activity',
      className: `${sizes.large} ${baseAction} ${hoverSoft}`,
    },
    {
      icon: Marketplace,
      label: 'Payout Center',
      className: `${sizes.small} ${baseAction} ${hoverSoft}`,
    },
    {
      icon: Wallet,
      label: 'Marketplace',
      className: `${sizes.small} ${baseAction} ${hoverSoft}`,
    },
  ];

  return (
    <header className="bg-[#1e5f4a] text-white">
      <div className="mx-auto w-full px-10 py-4 max-w-360 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded flex items-center justify-center">
            <img src={Logo} alt="Logo" />
          </div>
          <span className="text-[26px] font-semibold">Expert Listing</span>
        </div>
        <div className="flex items-center gap-4">
          {headerActions.map((action, index) => {
            return (
              <div key={index} className="relative group">
                <button
                  type="button"
                  className={action.className}
                  aria-label={action.label}
                  onClick={action.onClick}
                >
                  <img
                    src={action.icon}
                    alt={action.label}
                    className="w-6 h-6 object-contain filter invert brightness-0"
                  />
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                  <div className="relative">
                    <div className="absolute left-1/2 -top-1 w-2 h-2 -translate-x-1/2 rotate-45 bg-black" />
                    <div className="rounded-md bg-black px-3 py-2 text-[10px] font-normal whitespace-nowrap shadow-md">
                      {action.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="relative">
            <button
              type="button"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80"
              aria-label="Open profile menu"
              onClick={() => setShowProfileMenu((prev) => !prev)}
            >
              <span className="text-[#1e5f4a] font-semibold text-lg">D</span>
            </button>
            {showProfileMenu && <ProfileMenu onClose={() => setShowProfileMenu(false)} />}
          </div>
        </div>
      </div>

      {showBudgetModal && <BudgetModal onClose={() => setShowBudgetModal(false)} />}

      {showCalendarModal && <CalendarModal onClose={() => setShowCalendarModal(false)} />}
      {/* Profile dropdown rendered inline above */}
    </header>
  );
};

export default Header;
