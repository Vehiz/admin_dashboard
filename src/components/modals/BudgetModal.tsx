import Calculator1 from '../../assets/icons/calculator (1).png';
import AlignBotton from '../../assets/icons/align-bottom.png';
import TrendUp from '../../assets/icons/trend-up.png';
import Setting from '../../assets/icons/setting-4.png';

type BudgetModalProps = {
  onClose: () => void;
};

const BudgetModal = ({ onClose }: BudgetModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div className="absolute inset-0 bg-black/60" aria-hidden="true" onClick={onClose} />

    <div className="relative z-10 w-full max-w-109.5 overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="px-6 pt-6 bg-[#0C2841]">
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
        <div className="space-y-4 px-6">
          <div className="flex gap-3">
            <div className="mt-1 text-gray-700">
              <img src={Setting} className="text-2xl" alt="Align Botton" />
            </div>
            <div>
              <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">
                Set up annual budgets by account category
              </h3>
              <p className="text-xs text-gray-600 mt-1">Allocate funds across income and expense lines with full visibility.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 text-gray-700">
              <img src={TrendUp} className="text-2xl" alt="Align Botton" />
            </div>
            <div>
              <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">Track actuals vs budget in real time</h3>
              <p className="text-xs text-gray-600 mt-1">See how your community is performing against plan, month by month.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 text-gray-700">
              <img src={AlignBotton} className="text-2xl" alt="Align Botton" />
            </div>
            <div>
              <h3 className=" text-[16px] font-semibold text-gray-900 leading-snug">Adjust figures and forecast with ease</h3>
              <p className="text-xs text-gray-600 mt-1">Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-gray-900 text-white py-3 text-base font-semibold hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          Create Budget
        </button>
      </div>
    </div>
  </div>
);

export default BudgetModal;
