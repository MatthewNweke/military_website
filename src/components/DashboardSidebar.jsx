import { Avatar } from '@mui/material';
import { useState } from 'react';
import DashboardIcon from './utils/icons/DashboardIcon';
import NavIcon from './utils/icons/NavIcon';
import OutlineEmail from './utils/icons/OutlineEmail';
import PortfolioIcon from './utils/icons/PortfolioIcon';
import SupportIcon from './utils/icons/SupportIcon';
import Button from './utils/reusables/Button';

const DashboardSidebar = () => {
  const [page, setPage] = useState('dashboard');

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-lg xl:text-2xl font-semibold text-[#890002]">
          MS NETWORK
        </p>
        <div className="cursor-pointer">
          <NavIcon />
        </div>
      </div>

      <div className="flex items-center gap-3 mt-14">
        <Avatar src="" sx={{ width: 50, height: 50 }} />
        <div className="font-semibold">
          <p>LT MC UMOH</p>
          <p>N/18529</p>
        </div>
      </div>

      <div className="py-2 flex flex-col mt-5">
        <div
          onClick={() => {
            setPage('dashboard');
          }}
          className={
            page === 'dashboard'
              ? 'flex items-center px-3 py-2 bg-transparent rounded-lg cursor-pointer text-gray-800 border-2 border-gray-400 my-4 transition ease-in-out delay-250'
              : 'flex items-center px-3 py-2 cursor-pointer text-gray-800 my-4 transition ease-in-out'
          }
        >
          <DashboardIcon />
          <p className="ml-2 font-semibold capitalize text-lg">Dashboard</p>
        </div>
        <div
          onClick={() => {
            setPage('inbox');
          }}
          className={
            page === 'inbox'
              ? 'flex items-center px-3 py-2 bg-transparent rounded-lg cursor-pointer text-gray-800 border-2 border-gray-400 my-4 transition ease-in-out delay-250'
              : 'flex items-center px-3 py-2 cursor-pointer text-gray-800 my-4 transition ease-in-out'
          }
        >
          <OutlineEmail />
          <p className="ml-2 font-semibold capitalize text-lg">Inbox</p>
        </div>

        <div
          onClick={() => {
            setPage('portfolio');
          }}
          className={
            page === 'portfolio'
              ? 'flex items-center px-3 py-2 bg-transparent rounded-lg cursor-pointer text-gray-800 border-2 border-gray-400 my-4 transition ease-in-out delay-250'
              : 'flex items-center px-3 py-2 cursor-pointer text-gray-800 my-4 transition ease-in-out'
          }
        >
          <PortfolioIcon />
          <p className="ml-2 font-semibold capitalize text-lg">Portfolio</p>
        </div>

        <div
          onClick={() => {
            setPage('support');
          }}
          className={
            page === 'support'
              ? 'flex items-center px-3 py-2 bg-transparent rounded-lg cursor-pointer text-gray-800 border-2 border-gray-400 my-4 transition ease-in-out delay-250'
              : 'flex items-center px-3 py-2 cursor-pointer text-gray-800 my-4 transition ease-in-out'
          }
        >
          <SupportIcon />
          <p className="ml-2 font-semibold capitalize text-lg">Support</p>
        </div>
      </div>

      <div className="mt-5 mx-2">
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
