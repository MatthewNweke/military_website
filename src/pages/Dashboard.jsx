import DashboardMain from '../components/DashboardMain';
import DashboardSidebar from '../components/DashboardSidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-between overflow-x-hidden">
      <div className="w-[15rem] xl:w-72 py-6 px-2 xl:px-3">
        <DashboardSidebar />
      </div>
      <div className="flex-1 h-[100vh]  bg-[#890002] p-6 w-full flex flex-col">
        <Header />
        <DashboardMain />
      </div>
    </div>
  );
};

export default Dashboard;
