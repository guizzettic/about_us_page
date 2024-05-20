import { Dispatch, SetStateAction, useState } from "react";
import { StatusTypes } from "../../Contact";
import {
  emailChecker,
  messageChecker,
  nameChecker,
} from "../../utilities/forms";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormProps {
  setStatus: Dispatch<SetStateAction<StatusTypes>>;
}

const ENDPOINT =
  "https://www.greatfrontend.com/api/projects/challenges/contact";

const Form: React.FC<FormProps> = ({ setStatus }) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  errors;
  const validateForm = (): FormErrors => {
    const currErrors: FormErrors = {};

    if (!nameChecker(form.name)) {
      currErrors.name =
        "Name should be longer than 20 characters and should include first and last names.";
    }
    if (!emailChecker(form.email)) {
      currErrors.email = "Enter a valid email.";
    }
    if (!messageChecker(form.message)) {
      currErrors.message = "Message should be less than 500 characters.";
    }
    if (form.message.length < 4) {
      currErrors.message = "Message should be longer than 4 characters.";
    }
    console.log(currErrors);
    return currErrors;
  };

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 1) {
      setErrors(validationErrors);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (result.message) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (e) {
      console.error("Error experienced making API call");
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmission}
      className="flex h-[456px] w-[319px] flex-col justify-between rounded-lg border-neutral-400 bg-white p-4 shadow-lg md:h-[398px] md:w-[704px] lg:w-[592px]"
    >
      <div className="mb-5 flex h-full flex-col justify-around py-1 md:justify-around">
        <div className="flex flex-col justify-between md:flex md:flex-row md:justify-between ">
          <div className="flex flex-col md:w-[276px]">
            <label className="text-sm font-medium text-neutral-700">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              placeholder="Your name"
              className="bg-nuetral-500 rounded border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:w-[276px]">
            <label className="text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder="example@example.com"
              className="bg-nuetral-500 rounded border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-neutral-700">
            Message
          </label>
          <textarea
            name="message"
            cols={30}
            rows={5}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
            placeholder="Write your message..."
            className="bg-nuetral-500 rounded border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <label className="flex justify-end text-sm font-medium text-neutral-500 underline">
            {form.message.length}/500
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="h-[44px] w-full rounded-md bg-indigo-700 text-white shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
