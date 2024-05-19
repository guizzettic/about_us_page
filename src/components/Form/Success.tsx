import { Dispatch, SetStateAction } from "react";
import { StatusTypes } from "../../Contact";
import checkmarkSvg from "../../assets/checkmark.svg";

interface SuccessProps {
  setStatus: Dispatch<SetStateAction<StatusTypes>>;
}

const Success: React.FC<SuccessProps> = ({ setStatus }) => {
  const resetForm = () => {
    setStatus("idle");
  };

  return (
    <div className="h-[456px] w-[319px] rounded-lg  border-neutral-400 bg-white px-3 py-6 shadow-lg md:h-[398px] md:w-[704px] lg:w-[592px] lg:flex-row">
      <div className="mb-5 flex h-full flex-col items-center justify-around  md:justify-around">
        <div className="flex h-[172px] w-[250px] flex-col items-center justify-between">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow">
            <img src={checkmarkSvg} className="h-[24px] w-[24px]" />
          </div>
          <p className="h-[84px] w-[250px] text-center">
            Submission successful! We will get back to you in 3-5 days via
            email.
          </p>
        </div>

        <button
          onClick={resetForm}
          className="text-md h-[44px] w-[212px] rounded-md bg-white font-medium text-gray-900 shadow"
        >
          Submit another message
        </button>
      </div>
    </div>
  );
};

export default Success;
