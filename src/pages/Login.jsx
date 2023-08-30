import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Army_Logo.png';
import bgImg from '../assets/nigerian_army.jpg';
import Button from '../components/utils/reusables/Button';
import InputComponent from '../components/utils/reusables/InputComponent';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.preventDefault();
    setIsLoading(true);
    // console.log(data?.target?.form);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    navigate('/dashboard');
  };

  return (
    <div className="h-screen w-screen">
      <div className="relative w-full h-full">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70">
          <div className="absolute left-5 md:left-10 top-5">
            <p className="font-semibold text-lg md:text-xl italic text-white">
              MS Network
            </p>
          </div>
          <div className="px-5 py-1">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <form
            onSubmit={onSubmit}
            className="shadow-2xl flex flex-col justify-center items-center"
          >
            <p className="font-semibold text-lg italic text-white">
              Nigerian Army
            </p>
            <div className="text-gray-950 py-4">
              <InputComponent type={'text'} placeholder={'Army number'} />
              <InputComponent
                type={'password'}
                placeholder={'Password'}
                password
              />
            </div>
            <div className="my-4 w-full">
              {isLoading ? (
                <Button type="submit" loading={isLoading}>
                  Logging in...
                </Button>
              ) : (
                <Button type="submit" loading={isLoading}>
                  Log in
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
