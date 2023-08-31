import { Avatar } from '@mui/material';
import Search from './utils/reusables/Search';

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex-1 w-[60px]">
        <Search />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Avatar src="" alt="" />
          <p className="font-semibold text-gray-700">Umoh</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
