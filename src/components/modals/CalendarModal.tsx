import { useMemo, useState } from 'react';
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    const startDay = startOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const cells: { label: string; key: string; inMonth: boolean; isToday: boolean }[] = [];

    for (let i = startDay - 1; i >= 0; i -= 1) {
      const dayNum = prevMonthDays - i;
      const key = `${year}-${month - 1}-${dayNum}`;
      cells.push({ label: `${dayNum}`, key, inMonth: false, isToday: key === todayKey });
    }

    for (let d = 1; d <= daysInMonth; d += 1) {
      const key = `${year}-${month}-${d}`;
      cells.push({ label: `${d}`, key, inMonth: true, isToday: key === todayKey });
    }

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

export default CalendarModal;
