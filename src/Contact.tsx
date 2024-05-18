import building_line from "./assets/building_line.png";
import phone_line from "./assets/phone_line.svg";
import email_line from "./assets/email_line.png";
import { useState } from "react";
import Form from "./components/Form/Form";

type StatusTypes = "loading" | "idle" | "success" | "error";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<StatusTypes>("idle");
  const [response, setResponse] = useState<boolean | null>(null);
  status;
  setStatus;
  response;
  setResponse;
  return (
    // container
    <section className="m-[16px] bg-white h-[976px] w-[343px] sm:h-[992px] sm:w-[736px] xl:h-[736px] xl:w-[1408px] flex flex-col xl:flex-row xl:justify-around justify-around items-center rounded-md shadow-lg">
      {/* content */}
      <div className="flex flex-col justify-between h-[376px] w-[319px]">
        {/* talk to team */}
        <div className="h-[144px] w-[319px] flex flex-col justify-between">
          <p className="text-4xl text-neutral-900 font-semibold">
            Talk to our team
          </p>
          <p className="text-lg text-gray-500">
            We're commited to delivering the support you require to make your
            experience as smooth as possible.
          </p>
        </div>

        {/* contact info section */}
        <div className="h-[192px] w-[319px] flex flex-col justify-between">
          <div className="flex gap-2 items-center m-0 p-0 bg-white">
            <div className="border-t-white rounded-full shadow h-[48px] w-[48px] flex justify-center items-center">
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

          <div className="flex gap-2 items-center">
            <div className="border-t-white rounded-full shadow h-[48px] w-[48px] flex justify-center items-center">
              <img
                src={phone_line}
                className="h-[24px] w-[24px] shadow"
                alt="phone_image"
              />
            </div>
            <p>+1 (818) 555-0158</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="border-t-white rounded-full shadow h-[48px] w-[48px] flex justify-center items-center">
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
      <Form />
    </section>
  );
};

export default Contact;
