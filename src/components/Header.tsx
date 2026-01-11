import { useMemo, useState } from 'react';
import {
  FaCalculator,
  FaSlidersH,
  FaStopwatch,
  FaPencilAlt,
  FaArrowLeft,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaTools,
  FaCommentDots,
  FaMapMarkerAlt,
  FaLock,
  FaSignOutAlt,
} from 'react-icons/fa';

import Calculator from '../assets/icons/calculator.png'
import Calculator1 from '../assets/icons/calculator (1).png'
import Calendar from '../assets/icons/calendar.png'
import Search from '../assets/icons/document-text.png'
import Marketplace from '../assets/icons/shop.png'
import Wallet from '../assets/icons/wallet-2.png'
import Logo from '../assets/icons/Group.png'
import AlignBotton from '../assets/icons/align-bottom.png'
import TrendUp from '../assets/icons/trend-up.png'
import Setting from '../assets/icons/setting-4.png'


const Header = () => {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const headerActions = [
    {
      icon: Calculator,
      label: 'Budgeting',
      className:
        'w-12 h-12 text-white rounded-lg border border-white/15 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors',
      onClick: () => setShowBudgetModal(true),
    },
    {
      icon: Calendar,
      label: 'Calendar',
      className: 'w-12 h-12 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors',
      onClick: () => setShowCalendarModal(true),
    },
    {
      icon: Search,
      label: 'Search Activity',
      className: 'w-12 h-12 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors',
    },
    {
      icon: Marketplace,
      label: 'Payout Center',
      className: 'w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors',
    },
    {
      icon: Wallet,
      label: 'Marketplace',
      className: 'w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors',
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
            {showProfileMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  aria-hidden="true"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 top-12 z-50 w-90 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-4 px-5 py-4 border-2 rounded-lg bg-gray-100 m-4 border-gray-100">
                    <div className="w-14 h-14 rounded-full bg-[#1e5f4a] text-white flex items-center justify-center text-3xl font-semibold">
                      D
                    </div>
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
            )}
          </div>
        </div>
      </div>

      {showBudgetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
            onClick={() => setShowBudgetModal(false)}
          />

          <div className="relative z-10 w-full max-w-109.5 overflow-hidden rounded-2xl bg-white shadow-2xl">
           <div className='px-6 pt-6 bg-[#0C2841]'>
            <div className="relative h-64 bg-[#0c1c30] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.08)_0%,transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05)_0%,transparent_28%)]" />
              <div className="relative flex items-center justify-center text-white shadow-xl shadow-black/40">
                <img
                  src={Calculator1}
                  className="w-20 h-20 object-contain filter invert brightness-0 drop-shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
                  alt="Calculator"
                />
              </div>
            </div>
            </div>

            <div className="px-7 py-7 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 text-gray-700">
                    <img src={Setting} className="text-2xl" alt="Align Botton" />
                  </div>
                  <div>
                    <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">
                      Set up annual budgets by account category
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Allocate funds across income and expense lines with full visibility.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 text-gray-700">
                    <img src={TrendUp} className="text-2xl" alt="Align Botton" />
                  </div>
                  <div>
                    <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">
                      Track actuals vs budget in real time
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      See how your community is performing against plan, month by month.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 text-gray-700">
                    <img src={AlignBotton} className="text-2xl" alt="Align Botton" />
                  </div>
                  <div>
                    <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">
                      Adjust figures and forecast with ease
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-gray-900 text-white py-3 text-base font-semibold hover:bg-gray-800 transition-colors"
                onClick={() => setShowBudgetModal(false)}
              >
                Create Budget
              </button>
            </div>

            {/* <button
              type="button"
              aria-label="Close budgeting modal"
              className="absolute right-4 top-4 text-white/80 hover:text-white"
              onClick={() => setShowBudgetModal(false)}
            >
              ✕
            </button> */}
          </div>
        </div>
      )}

      {showCalendarModal && <CalendarModal onClose={() => setShowCalendarModal(false)} />}
      {/* Profile dropdown rendered inline above */}
    </header>
  );
};

type CalendarModalProps = {
  onClose: () => void;
};

const CalendarModal = ({ onClose }: CalendarModalProps) => {
  const todayKey = useMemo(() => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  }, []);

  const [viewDate, setViewDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const monthLabel = useMemo(
    () => viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    [viewDate]
  );

  const weeks = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const startDay = startOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells: { label: string; key: string; inMonth: boolean; isToday: boolean }[] = [];

    // leading days from previous month
    for (let i = startDay - 1; i >= 0; i -= 1) {
      const dayNum = prevMonthDays - i;
      const key = `${year}-${month - 1}-${dayNum}`;
      cells.push({ label: `${dayNum}`, key, inMonth: false, isToday: key === todayKey });
    }

    // current month days
    for (let d = 1; d <= daysInMonth; d += 1) {
      const key = `${year}-${month}-${d}`;
      cells.push({ label: `${d}`, key, inMonth: true, isToday: key === todayKey });
    }

    // trailing days to fill 6 weeks (42 cells)
    const total = 42;
    let nextDay = 1;
    while (cells.length < total) {
      const key = `${year}-${month + 1}-${nextDay}`;
      cells.push({ label: `${nextDay}`, key, inMonth: false, isToday: key === todayKey });
      nextDay += 1;
    }

    const chunked: typeof cells[] = [];
    for (let i = 0; i < cells.length; i += 7) {
      chunked.push(cells.slice(i, i + 7));
    }
    return chunked;
  }, [todayKey, viewDate]);

  const goPrevMonth = () => {
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start md:items-center px-2 md:px-6">
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

      <div className="relative z-10 w-full max-w-95 h-180 bg-[#111] text-white rounded-lg shadow-2xl overflow-hidden mt-4 md:mt-0">
        <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <FaArrowLeft className="w-4 h-4" />
            <span>Calendar</span>
          </div>
          <button
            type="button"
            aria-label="Close calendar"
            onClick={onClose}
            className="text-white/80 hover:text-white"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between px-4 py-4 bg-[#1a1a1a]">
          <button
            type="button"
            aria-label="Previous month"
            className="text-white/80 hover:text-white"
            onClick={goPrevMonth}
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-sm font-semibold">{monthLabel}</div>
          <button
            type="button"
            aria-label="Next month"
            className="text-white/80 hover:text-white"
            onClick={goNextMonth}
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 pb-4 overflow-y-auto h-[calc(100%-112px)]">
          <div className="grid grid-cols-7 text-[11px] text-white/70 mb-3 uppercase tracking-wide">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center py-1">
                {day}
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-cols-7 text-sm text-white/80">
                {week.map((cell) => (
                  <div
                    key={cell.key}
                    className={`flex items-center justify-center h-12 border border-white/5 ${
                      cell.inMonth ? '' : 'text-white/40'
                    }`}
                  >
                    {cell.isToday ? (
                      <span className="inline-flex items-center justify-center min-w-6 px-2 py-1 rounded-full bg-[#4d51ff] text-white text-xs font-semibold">
                        {cell.label}
                      </span>
                    ) : (
                      <span className={cell.inMonth ? 'text-white/80' : 'text-white/40'}>{cell.label}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
