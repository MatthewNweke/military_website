import { useSelector } from 'react-redux';
import DashboardCards from './DashboardPages/DashboardCards';
import Inbox from './DashboardPages/Inbox';
import Portfolio from './DashboardPages/Portfolio';
import Support from './DashboardPages/Support';

const DashboardMain = () => {
  const page = useSelector((state) => state.main.page);

  return (
    <div className="mt-8 h-full">
      {page === 'dashboard' && <DashboardCards />}
      {page === 'inbox' && <Inbox />}
      {page === 'portfolio' && <Portfolio />}
      {page === 'support' && <Support />}
    </div>
  );
};

export default DashboardMain;
