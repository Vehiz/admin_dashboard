import Header from './components/Header';
import Navigation from './components/Navigation';
import SalesOverview from './components/SalesOverview';
import OverviewCard from './components/OverviewCard';
import FeaturedListings from './components/FeaturedListings';
import { FaComments } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";



function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <Navigation />
      
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="py-[12px]">
          <h1 className="text-[22px] font-bold text-gray-900">Welcome, Ahmed</h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area - Sales Overview */}
          <div className="col-span-8">
            <SalesOverview />
          </div>

          {/* Sidebar - Overview Cards */}
          <div className="col-span-4 space-y-4">
            <OverviewCard
              icon={IoHomeOutline}
              title="Listings Overview"
              stats={[
                { label: 'Total', value: '1.8k' },
                { label: 'Active', value: '80' },
                { label: 'Archived', value: '1k' },
              ]}
            />
            <OverviewCard
              icon={CiUser}
              title="Users Overview"
              stats={[
                { label: 'Total', value: '20.7k' },
                { label: 'Riders', value: '8.5k' },
                { label: 'Subscribers', value: '7.5k' },
              ]}
            />
          </div>
        </div>

        {/* Featured Listings */}
        <div className="mt-6">
          <FeaturedListings />
        </div>
      </div>

      {/* Floating Chat Icon */}
      <button
        type="button"
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors z-50"
        aria-label="Chat"
      >
        <FaComments className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default App;
