import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import CodeSnippet from "./CodeSnippet";
import useContactStore from "../../../store/useContactStore";
import axios from "axios";
import toast from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  // Emailjs Code

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {

    const serviceID = "service_ny99lcf";
    const templateID = "template_l9nkmpr";
    const publicKey = "PB7nKS56J093nXl6k";

    const formData = new FormData();
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", publicKey);
    formData.append("user_name", data?.name);
    formData.append("user_email", data?.email);
    formData.append("message", data?.message);
    formData.append("lib_version", "4.4.1");
    formData.append("subject", "no subject from user ");

    try {
      setIsLoading(true)
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        formData,

      );

      if (response?.data === "OK") {
        toast.success("Your message has been sent successfully!")
        setIsLoading(false)
        setValue("name","")
        setValue("email","")
        setValue("message","")


      }
      setStatus("Message sent successfully!");
    } catch (error) {
      setIsLoading(false)
      toast.error("Failed to send message. Please try again.");
    }
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
          {isLoading ? "sending..." : "submit-message"}
        </button>
      </form>

      <div className="border-r pt-0 lg:flex hidden pl-[76px] border-[#1E2D3D]"></div>

      <div className="pt-[72px] pl-[75px] lg:flex hidden">
        <CodeSnippet />
      </div>
    </div>
  );
}
