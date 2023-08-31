import { Avatar } from '@mui/material';

const UserCard = () => {
  return (
    <div className="bg-white rounded-md min-h-[16rem] min-w-[12rem] 2xl:w-[18rem] px-3 shadow-md">
      <div className="flex gap-2 items-center pt-3 pb-6 border-b-2">
        <Avatar
          src=""
          alt=""
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
        <div>
          <p className="font-semibold">Juliet Obi</p>
          <p className="text-gray-500">Major</p>
        </div>
      </div>
      <div className="pt-6 pb-3 flex flex-col gap-2">
        <p className="flex justify-between">
          Personnel: <span className="text-gray-500">11130</span>
        </p>
        <p className="flex justify-between">
          Email: <span className="text-gray-500">julietobi@yahoo.com</span>
        </p>
        <p className="flex justify-between">
          Corp: <span className="text-gray-500">Finance</span>
        </p>
        <p className="flex justify-between">
          Unit: <span className="text-gray-500">Nasta</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
