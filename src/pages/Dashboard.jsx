import DashboardMain from '../components/DashboardMain';
import DashboardSidebar from '../components/DashboardSidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="w-screen max-w-screen flex justify-between">
      <div className="w-[15rem] xl:w-72 py-6 px-2 xl:px-3">
        <DashboardSidebar />
      </div>
      <div className="flex-1 min-h-screen bg-pink-100 p-6 w-full flex flex-col">
        <Header />
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
