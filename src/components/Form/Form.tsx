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

  const messageLengthClass =
    form.message.length >= 500 ? "text-red-600" : "text-neutral-500";

  errors;
  const validateForm = (): FormErrors => {
    const currErrors: FormErrors = {};

    if (!nameChecker(form.name)) {
      currErrors.name = "Name should be longer than 20 chars.";
    }
    if (!emailChecker(form.email)) {
      currErrors.email = "Enter a valid email.";
    }
    if (!messageChecker(form.message)) {
      currErrors.message = "Message is too long.";
    }
    if (form.message.length < 4) {
      currErrors.message = "Message is too short.";
    }
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
      className="flex h-[456px] w-[319px] flex-col rounded-lg border border-neutral-200 bg-white p-3 shadow-lg md:h-[398px] md:w-[704px] lg:w-[592px]"
    >
      <div className="mb-5 flex h-full flex-col justify-around md:justify-between">
        <div className="flex h-2/6 flex-col justify-between md:flex md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:w-[47%]">
            <label className="text-sm font-medium text-neutral-600">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              placeholder="Your name"
              className="rounded border bg-neutral-100 px-3 py-2 text-sm  text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="line-clamp-1 text-sm text-red-600">
              {errors.name}
            </span>
          </div>

          <div className="flex flex-col md:w-[47%]">
            <label className="text-sm font-medium text-neutral-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder="example@example.com"
              className="rounded border bg-neutral-100 px-3 py-2 text-sm  text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="line-clamp-1 text-sm text-red-600">
              {errors.email}
            </span>
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
            className="rounded border bg-neutral-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div className="flex justify-between">
            <span className="line-clamp-1 text-sm text-red-600">
              {errors.message}
            </span>
            <label
              className={`flex justify-end text-sm font-medium underline ${messageLengthClass}`}
            >
              {form.message.length}/500
            </label>
          </div>
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
