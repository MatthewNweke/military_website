import DashboardMain from '../components/DashboardMain';
import DashboardSidebar from '../components/DashboardSidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="w-screen max-w-screen flex justify-between gap-5">
      <div className="w-52 xl:w-64">
        <DashboardSidebar />
      </div>
      <div className="flex-1 min-h-screen bg-pink-100 p-5 w-full">
        <Header />
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
