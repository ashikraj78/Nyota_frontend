import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import react, { useContext } from "react";
import { useForm } from "react-hook-form";

function OtpForm({ mobileNumber, parentPage }) {
  const { login } = useContext(UserContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onOTPSubmit = async (data) => {
    reset();
    const otpData = { ...data, mobilenumber: mobileNumber };
    const endpoint = parentPage === "Register" ? "createUser" : "loginUser";
    const url = `http://localhost:4000/user/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(otpData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from server.");
      }

      const responseData = await response.json();

      localStorage.setItem("nyota", JSON.stringify(responseData));
      login(responseData);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onOTPSubmit)}
      className="border-2 border-amber-50 rounded p-4 inline-block"
    >
      <label>Enter the OTP</label> <br></br>
      <input
        {...register("otp", { required: true })}
        className="text-slate-950 ml-4 p-1"
      />{" "}
      <br></br>
      {errors.otp && (
        <span className="text-pink-600">This field is required</span>
      )}
      <br></br>
      <input type="submit" className="border-2 border-amber-50 rounded p-1" />
    </form>
  );
}
export default OtpForm;
