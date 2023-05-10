import react, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function RegisterForm({ parentPage, setOtpForm, setMobileNumber }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState(false);

  const generateOTP = async (data) => {
    reset();

    try {
      const response = await fetch("http://localhost:4000/user/generateOTP", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from server.");
      } else {
        setOtpForm(true);
      }

      const responseData = await response.json();
      setMobileNumber(responseData?.mobileNumber);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(generateOTP)}
      className="border-2 border-amber-50 rounded p-4 inline-block"
    >
      {parentPage == "Register" && (
        <div>
          <label>name</label>
          <input
            {...register("name", { required: true })}
            className="text-slate-950 ml-4 p-1"
          />{" "}
          <br></br>
          {errors.name && (
            <span className="text-pink-600">This field is required</span>
          )}
          <br></br>
        </div>
      )}
      {/* <PhoneInput value={value} onChange={setValue} defaultCountry="IN" /> */}
      <label>mobile number</label>
      <input
        // type="number"
        pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$"
        {...register("mobilenumber", { required: true })}
        inputMode="tel"
        className="text-slate-950 ml-4 p-1 mt-4"
        title="Only numbers and '+' are accepted"
      />{" "}
      <br></br>
      {errors.mobilenumber && (
        <span className="text-pink-600">This field is required</span>
      )}
      <br></br>
      <input
        type="submit"
        className="border-2 border-amber-50 rounded p-1"
        value={parentPage}
      />
    </form>
  );
}
export default RegisterForm;
