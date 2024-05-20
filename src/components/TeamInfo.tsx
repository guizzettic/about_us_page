import building_line from "../assets/building_line.png";
import phone_line from "../assets/phone_line.svg";
import email_line from "../assets/email_line.png";

const TeamInfo: React.FC = () => {
  return (
    <div className="flex h-[376px] w-[319px] flex-col justify-between pl-2 md:h-[364px] md:w-[704px] xl:h-[376px] xl:w-[592px] xl:flex-col">
      <div className="flex h-[144px] w-[319px] flex-col justify-between md:h-[124px] md:w-[704px] xl:h-[136px] xl:w-[592px]">
        <p className="text-4xl font-semibold tracking-wide text-neutral-900 md:text-5xl xl:text-6xl">
          Talk to our team
        </p>
        <p className="text-lg text-gray-500 md:text-xl">
          We're commited to delivering the support you require to make your
          experience as smooth as possible.
        </p>
      </div>

      <div className="flex h-[192px] w-[319px] flex-col justify-between">
        <div className="m-0 flex items-center gap-2 bg-white p-0">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={building_line}
              className="h-[18px] w-[22px]"
              alt="building_image"
            />
          </div>

          <div className="flex w-1/2 items-center justify-between sm:w-3/6">
            <p className="sm:whitespace-nowrap">
              123 Maple Street, SpringField, IL, USA
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={phone_line}
              className="h-[18px] w-[22px]"
              alt="phone_image"
            />
          </div>
          <p className="text-neutral-600 ">+1 (818) 555-0158</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={email_line}
              className="h-[18px] w-[22px]"
              alt="email_image"
            />
          </div>
          <p className="text-neutral-600 ">hello@abstractly.com</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
