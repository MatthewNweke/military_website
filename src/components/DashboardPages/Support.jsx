import InputComponent from '../utils/reusables/InputComponent';
import locationimg from '../../assets/location.svg'
import envelopeimg from '../../assets/envelope.svg';
import telephoneimg from '../../assets/telephone.svg';
const Support = () => {
  // Mathew work on this component
  return <div className="">
    {/* Support */}
    <div className=" ">
      <div className="text-center text-[white] leading-10">
        <h2 className="text-[1.6rem] font-bold">Get Support!</h2>
        <p className="font-bold">To resolve an issue,Update your record fill the form below</p>
        <ul className="flex justify-center gap-10 items-center">
          <ul className="flex flex-col items-center">
            <li className=""><img src={locationimg} alt="" className="h-[2rem] w-[2rem] text-[white]" /></li>
            <li>MS HQ Abuja Mogadishu Cent</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li><img src={telephoneimg} alt="" className="h-[2rem] w-[2rem] text-[white]" /></li>
            <li>(+234)90 7355 6154</li>
          </ul>
          <ul className="flex flex-col items-center">
            <li><img src={envelopeimg} alt="" className="h-[2rem] w-[2rem]" /></li>
          <li>Support@MSnetwork.com</li>
          </ul>
        </ul>
      </div>
      <form action="" className="border-[1px] bg-[white] flex flex-col items-center 
      justify-around w-[50%] h-[65vh] mt-0 mb-0 ml-auto mr-auto rounded-md py-3 md:w-[70%] sm:w-[80%]">
        <h3 className="self-start px-7 font-bold">Contact form</h3>
        <div className="flex items-center justify-between gap-7 h-[300px]">

          <div>
            <label htmlFor="" className="font-bold">Your Name</label>
            <InputComponent type={'text'} placeholder={''} className="rounded-lg w-[40%]  border-black-500" />
            <label htmlFor="" className="font-bold">Mail</label>
            <InputComponent type={'email'} placeholder={""} className="rounded-lg w-[40%] border-black-500" />
            <label htmlFor="" className="font-bold">Personnel number</label>
            <InputComponent type={'number'} placeholder={""} className="rounded-lg w-[40%] border-black-500 appearance-none" />
          </div>
          {/* <InputComponent type={'text'} placeholder={''} className="caret-black border-[1px] h-[300px]" /> */}
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold">Query</label>
            <textarea name="" id="" cols="20" rows="7" className="bg-[#e6e9f080] rounded-lg py-3 px-3 outline-none "></textarea>
          </div>

        </div>
        <div className="flex gap-1 justify-around text-[0.8rem]">
          <button>porfolio Update</button>
          <button>Name Change</button>
          <button>Login Issue</button>
          <button>Others</button>
        </div>
        <button className="bg-[black] text-[white]">Send Message</button>
      </form>
    </div>
  </div>;
};

export default Support;
