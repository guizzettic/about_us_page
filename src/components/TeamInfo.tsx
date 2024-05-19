import building_line from "../assets/building_line.png";
import phone_line from "../assets/phone_line.svg";
import email_line from "../assets/email_line.png";

const TeamInfo: React.FC = () => {
  return (
    <div className="flex h-[376px] w-[319px] flex-col justify-between md:h-[364px] md:w-[704px] xl:h-[376px] xl:w-[592px] xl:flex-col">
      {/* text-pair section */}
      <div className="flex h-[144px] w-[319px] flex-col justify-between md:h-[124px] md:w-[704px] xl:h-[136px] xl:w-[592px]">
        <p className="text-4xl font-semibold tracking-wide text-neutral-900">
          Talk to our team
        </p>
        <p className="text-lg text-gray-500">
          We're commited to delivering the support you require to make your
          experience as smooth as possible.
        </p>
      </div>

      {/* contact info section */}
      <div className="flex h-[192px] w-[319px] flex-col justify-between">
        <div className="m-0 flex items-center gap-2 bg-white p-0">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={building_line}
              className="h-[24px] w-[24px] shadow"
              alt="building_image"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <p>123 Maple Street,</p>
            <p> SpringField, IL, USA</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={phone_line}
              className="h-[24px] w-[24px] shadow"
              alt="phone_image"
            />
          </div>
          <p>+1 (818) 555-0158</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-t-white shadow">
            <img
              src={email_line}
              className="h-[24px] w-[24px] shadow"
              alt="email_image"
            />
          </div>
          <p>hello@abstractly.com</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
