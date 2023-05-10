import OtpForm from "@/components/OtpForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

function Login() {
  const [otpForm, setOtpForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(false);
  const page = "Login";
  return (
    <main className="min-h-screen  items-center justify-between p-24">
      <h2 className="text-3xl">Login</h2>

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
        <a href="/register" class="text-xl font-semibold leading-6 text-white">
          Register <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </main>
  );
}
export default Login;
