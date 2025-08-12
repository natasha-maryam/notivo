import React, { useId, useState } from "react";
import { Link } from "react-router-dom";
import Password from "../assets/svgs/password.svg";
import User from "../assets/svgs/User.svg";
import Email from "../assets/svgs/email.svg";
function RightPromo() {
  return (
    <aside className="hidden md:block relative h-full w-full p-2 sm:p-2 lg:p-2">
      <div className="relative h-full w-full bg-[#8DE87F] rounded-[1px] lg:rounded-[18px] overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute inset-0">
          <div
            className="pointer-events-none absolute
              -bottom-1 -left-1 w-[230px] border-[40px]
              aspect-square rounded-full border-[#3333331A] z-[1]"
          />
        </div>

        {/* Text */}
        <div className="px-6 md:px-8 pt-28 max-w-[90%] relative z-[3] flex flex-col pb-[-6]">
          <h2 className="text-[32px] leading-[38px] font-extrabold text-[#333333] w-full block"   style={{ letterSpacing: "-2.5px" }}>
              Lead Smarter with Better Team Insights
          </h2>
          <p className="mt-3 text-[15px] leading-[22px] text-[#1f2937]/75 max-w-[560px]">
            Capture feedback, track growth, and simplify performance
            conversations <br /> — all in one private, intuitive workspace.
            <br />
          </p>
        </div>

        {/* Big image that stays big */}
        <div className="relative h-full z-[2] pt-10 pr-6 overflow-hidden">
          <img
            src="/right-pannel.avif"
            alt="Product preview"
            loading="lazy"
            draggable={false}
            className="
              select-none rounded-xl shadow-2xl transform-gpu origin-center rotate-[-5deg] ml-16
              scale-[1]  /* Keeps it large */
              min-w-[500px] /* Prevents shrinking too much */
            "
          />
        </div>
      </div>
    </aside>
  );
}
function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.1 14.6 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.2-.2-1.7H12z"/>
      <path fill="#FBBC05" d="M12 22c2.6 0 4.8-.9 6.4-2.4l-3-2.5c-.8.5-1.9.9-3.4.9-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22z"/>
      <path fill="#4285F4" d="M21.6 12.1c0-.7-.1-1.2-.2-1.7H12v3.9h5.4c-.2 1.2-1.6 3.6-5.4 3.6-2.7 0-5-1.8-5.8-4.3l-3.3 2.5C4.6 19.7 8 22 12 22c5.8 0 9.6-4.1 9.6-9.9z"/>
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 2V12h3.4l-.5 3.5H14v8.4C19.6 23.1 24 18.1 24 12z"/>
    </svg>
  );
}
function UserIcon({ className = "" }: { className?: string }) {
  return (
    <img src={User} alt="User icon" className={className} />
  );
}
function MailIcon({ className = "" }: { className?: string }) {
  return (
    <img src={Email} alt="Mail icon" className={className} />
  );
}
function LockIcon({ className = "" }: { className?: string }) {
  return (
    <img src={Password} alt="Lock icon" className={className} />
  );
}
function SocialButton({ provider, children }: { provider: "google" | "facebook"; children: React.ReactNode }) {
  const Icon = provider === "google" ? GoogleIcon : FacebookIcon;
  return (
    <button
      type="button"
      className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl ring-1 ring-[#EDEDED] px-3 text-sm font-medium  bg-[#F5F5F6] hover:bg-[#F5F5F6]"
    >
      <Icon className="w-[18px] h-[18px]" />
      <span>{children}</span>
    </button>
  );
}
function DividerWithText({ text = "OR" }: { text?: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px bg-gray-200 flex-1" />
      <span className="text-xs tracking-wide text-gray-400">{text}</span>
      <div className="h-px bg-gray-200 flex-1" />
    </div>
  );
}
function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <button
      className={`w-full h-10 inline-flex items-center justify-center rounded-xl bg-[#333333] text-white px-4 text-sm  hover:bg-[#333333] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
function InputWithIcon({
  id,
  label,
  Icon,
  type = "text",
  withVisibilityToggle = false,
  ...inputProps
}: {
  id?: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  type?: string;
  withVisibilityToggle?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const reactId = useId();
  const inputId = id ?? `field-${reactId}`;
  const [show, setShow] = useState(false);
  const isPwd = type === "password";
  const effectiveType = isPwd && withVisibilityToggle ? (show ? "text" : "password") : type;

  return (
    <div>
      <label htmlFor={inputId} className="block text-[14px] font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          id={inputId}
          type={effectiveType}
          className="w-full h-10 rounded-xl ring-1 ring-[#EDEDED] focus:ring-2 focus:ring-emerald-500/60 pl-9 pr-10 text-[13px] placeholder:text-[12px] placeholder:text-gray-400"
          {...inputProps}
        />
        {isPwd && withVisibilityToggle && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs hover:text-gray-600"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-2 font-poppins">
      <section className="bg-white px-5 sm:px-16 md:px-9 lg:px-16 xl:px-24 pb-12 flex flex-col">
        <div className="pt-6 flex justify-center md:justify-start">
          <img src="/logo.avif" alt="notivo" className="block h-6 w-auto select-none" draggable={false} />
        </div>

        <div className="flex-1 grid place-items-center mt-10 md:mt-16">
          <div className="w-full max-w-[420px] lg:max-w-[480px] text-center md:text-left">
            <h1 className="text-[28px] leading-[34px] font-semibold text-gray-900">Sign up</h1>
            <p className="mt-1 text-[16px] leading-[18px] text-[#33333399]">Enter your details to signup.</p>

            <div className="mt-8 space-y-4">
              <SocialButton provider="google">Sign up with Google</SocialButton>
              <SocialButton provider="facebook">Sign up with Facebook</SocialButton>
            </div>

            <DividerWithText text="or" />

            <form className="space-y-5 text-left mt-8">
              <InputWithIcon label="Full name" placeholder="Full Name" Icon={UserIcon} name="fullName" autoComplete="name" />
              <InputWithIcon label="Email" type="email" placeholder="Email" Icon={MailIcon} name="email" autoComplete="email" />
              <InputWithIcon label="Password" type="password" placeholder="Password" Icon={LockIcon} name="password" autoComplete="new-password" withVisibilityToggle />
              <PrimaryButton type="submit">Signup</PrimaryButton>
            </form>

            <p className="text-[13px] text-gray-500 mt-8 text-center">
              If you already have an account?{" "}
              <Link to="/login" className="text-gray-900 font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
      <RightPromo />
    </div>
  );
}
