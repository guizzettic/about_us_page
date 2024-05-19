import { useState } from "react";
import Form from "./components/Form/Form";
import TeamInfo from "./components/TeamInfo";
import Success from "./components/Form/Success";
import Error from "./components/Form/Error";

type StatusTypes = "loading" | "idle" | "success" | "error";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<StatusTypes>("error");
  const [response, setResponse] = useState<boolean | null>(null);
  status;
  setStatus;
  response;
  setResponse;
  return (
    <section className="m-[16px] flex h-[976px] w-[343px] flex-col items-center justify-around rounded-md bg-white shadow-lg sm:h-[992px] sm:w-[736px] xl:h-[736px] xl:w-[1408px] xl:flex-row xl:justify-around">
      {status === "error" && <Error />}
      <TeamInfo />
      {status === "success" || status === "error" ? <Success /> : <Form />}
    </section>
  );
};

export default Contact;
