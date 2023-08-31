import { Avatar } from '@mui/material';
import Button from '../components/utils/reusables/Button';
import EmailIcon from './utils/icons/EmailIcon';
import Search from './utils/reusables/Search';

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <Search />
      </div>
      <div className="flex items-center justify-between gap-7 mr-5">
        <div className="flex items-center gap-1">
          <Avatar src="" alt="" />
          <p className="font-semibold text-gray-700">Umoh</p>
        </div>
        <div>
          <EmailIcon />
        </div>
        <div className="w-[6rem]">
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
