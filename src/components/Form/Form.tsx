import { useState } from "react";

interface Form {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  //   const [errors, setErrors] = useState<Form>({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  return (
    <div className="flex h-[456px] w-[319px] flex-col justify-between rounded-lg border-neutral-400 bg-white p-4 shadow-lg md:h-[398px] md:w-[704px] lg:w-[592px]">
      <div className="mb-5 flex h-full flex-col justify-around py-1 md:justify-around">
        {/* name-input */}

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

          {/* email-input */}
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

        {/* message-input */}
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
      <button className="h-[44px] w-full rounded-md bg-indigo-700 text-white shadow-md">
        Submit
      </button>
    </div>
  );
};

export default Form;
