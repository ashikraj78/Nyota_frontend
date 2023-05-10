import OtpForm from "@/components/OtpForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

export default function Register() {
  const [otpForm, setOtpForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(false);
  const page = "Register";
  return (
    <main className="min-h-screen  items-center justify-between p-24">
      <h2 className="text-3xl">Register User</h2>

      {otpForm ? (
        <OtpForm mobileNumber={mobileNumber} parentPage={page} />
      ) : (
        <RegisterForm
          parentPage={page}
          setOtpForm={setOtpForm}
          setMobileNumber={setMobileNumber}
        />
      )}
      {/* <p>Login</p> */}
      <div className="mt-4">
        <a href="/login" class="text-xl font-semibold leading-6 text-white">
          Login <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </main>
  );
}
