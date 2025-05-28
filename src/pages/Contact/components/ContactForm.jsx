import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import CodeSnippet from "./CodeSnippet";
import useContactStore from "../../../store/useContactStore";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const setContact = useContactStore((state) => state.setContact);

  const onSubmit = (data) => {
     setContact(data);
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen px-3 lg:pl-[76px] bg-[#011627] lg:flex justify-center">
      <form
        className="w-full pt-16 lg:mx-0 mx-auto sm:max-w-[60%] max-w-[100%]  lg:max-w-[35%] text-[#85A5C4]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name input */}
        <div className="mb-5">
          <p className="mb-1">_name:</p>
          <Input
            type="text"
            id="name"
            placeholder=""
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email input */}
        <div className="mb-5">
          <p className="mb-1">_email:</p>
          <Input
            type="email"
            id="email"
            placeholder=""
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message input */}
        <div className="mb-5">
          <p className="mb-1">_message:</p>
          <textarea
            id="message"
            rows="5"
            className="w-full px-3 text-[#85A5C4] py-3 text-[14px] bg-[#011221] border-2 border-[#1E2D3D] rounded-[8px] outline-none focus:ring-1 focus:ring-[#5d98d3] resize-none"
            {...register("message")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#1E2D3D] hover:bg-[#263B4C] cursor-pointer text-white px-4 py-2 rounded-[8px] font-mono text-sm transition"
        >
          submit-message
        </button>
      </form>

      <div className="border-r pt-0 lg:flex hidden pl-[76px] border-[#1E2D3D]"></div>

      <div className="pt-[72px] pl-[75px] lg:flex hidden">
        <CodeSnippet />
      </div>
    </div>
  );
}
