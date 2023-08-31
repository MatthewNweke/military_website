import UserCard from '../utils/cards/UserCard';

const DashboardCards = () => {
  return (
    <div className="bg-[#890002] bg-[url('/Army_Logo.png')] bg-no-repeat bg-center bg-contain mr-5 h-[83vh] overflow-y-scroll no-scrollbar w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-3 py-3">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default DashboardCards;
