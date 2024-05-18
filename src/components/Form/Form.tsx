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
    <div className="p-4 bg-white rounded-lg h-[456px] w-[319px] md:h-[398px] md:w-[704px] lg:w-[592px] shadow-lg border-neutral-400 flex flex-col justify-between">
      <div className="py-1 flex flex-col justify-around h-full mb-5 md:justify-around">
        {/* name-input */}

        <div className="flex flex-col justify-between md:flex md:flex-row md:justify-between ">
          <div className="flex flex-col md:w-[276px]">
            <label className="text-sm text-neutral-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              placeholder="Your name"
              className="py-2 px-3 bg-nuetral-500 font-medium border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* email-input */}
          <div className="flex flex-col md:w-[276px]">
            <label className="text-sm text-neutral-700 font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              placeholder="example@example.com"
              className="py-2 px-3 bg-nuetral-500 font-medium border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* message-input */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700 font-medium">
            Message
          </label>
          <textarea
            name="message"
            cols={30}
            rows={5}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
            placeholder="Write your message..."
            className="py-2 px-3 bg-nuetral-500 font-medium border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <label className="flex justify-end text-sm font-medium text-neutral-500 underline">
            {form.message.length}/500
          </label>
        </div>
      </div>
      <button className="bg-indigo-700 text-white w-full rounded-md h-[44px] shadow-md">
        Submit
      </button>
    </div>
  );
};

export default Form;
