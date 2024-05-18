import { useState } from "react";
import Form from "./components/Form/Form";
import TeamInfo from "./components/TeamInfo";

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
      <TeamInfo />
      <Form />
    </section>
  );
};

export default Contact;
