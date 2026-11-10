
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

type AuthMode = "login" | "register";

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");

  const isLogin = mode === "login";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLogin) {
      console.log("Login submitted");
    } else {
      console.log("Register submitted");
    }
  };

  return (
    <section className="min-h-screen w-full grid place-items-center bg-[#eef0f6] p-6 font-sans">
      <div className="relative w-full max-w-[760px] min-h-[560px] md:min-h-[460px] overflow-hidden rounded-[20px] bg-white shadow-[0_30px_70px_-42px_rgba(30,35,80,0.55)]">

        {/* LOGIN FORM */}
        <form
          onSubmit={handleSubmit}
          className={`absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-center gap-3 p-8 pb-[170px] transition-opacity duration-500 md:w-1/2 md:p-10 ${
            isLogin
              ? "z-20 opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <h2 className="mb-1 text-[23px] font-bold text-[#161c2e]">
            Sign in
          </h2>

          <input
            type="email"
            name="loginEmail"
            placeholder="Email"
            autoComplete="email"
            required
            className="h-12 rounded-xl border-[1.5px] border-[#d7dbe6] bg-[#fafbfe] px-3.5 text-[14.5px] text-[#161c2e] outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <input
            type="password"
            name="loginPassword"
            placeholder="Password"
            autoComplete="current-password"
            required
            className="h-12 rounded-xl border-[1.5px] border-[#d7dbe6] bg-[#fafbfe] px-3.5 text-[14.5px] text-[#161c2e] outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <button
            type="submit"
            className="mt-1 h-12 rounded-xl bg-indigo-600 text-[15px] font-semibold text-white transition hover:brightness-110 active:scale-[0.985]"
          >
            Log in
          </button>
        </form>

        {/* REGISTER FORM */}
        <form
          onSubmit={handleSubmit}
          className={`absolute right-0 top-0 z-10 flex h-full w-full flex-col justify-center gap-3 p-8 pb-[170px] transition-opacity duration-500 md:w-1/2 md:p-10 ${
            !isLogin
              ? "z-20 opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <h2 className="mb-1 text-[23px] font-bold text-[#161c2e]">
            Create account
          </h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            autoComplete="name"
            required
            className="h-12 rounded-xl border-[1.5px] border-[#d7dbe6] bg-[#fafbfe] px-3.5 text-[14.5px] text-[#161c2e] outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <input
            type="email"
            name="registerEmail"
            placeholder="Email"
            autoComplete="email"
            required
            className="h-12 rounded-xl border-[1.5px] border-[#d7dbe6] bg-[#fafbfe] px-3.5 text-[14.5px] text-[#161c2e] outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <input
            type="password"
            name="registerPassword"
            placeholder="Password"
            autoComplete="new-password"
            minLength={8}
            required
            className="h-12 rounded-xl border-[1.5px] border-[#d7dbe6] bg-[#fafbfe] px-3.5 text-[14.5px] text-[#161c2e] outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <button
            type="submit"
            className="mt-1 h-12 rounded-xl bg-indigo-600 text-[15px] font-semibold text-white transition hover:brightness-110 active:scale-[0.985]"
          >
            Sign up
          </button>
        </form>

        {/* ANIMATED PURPLE PANEL */}
        <div
  className={`absolute bottom-0 left-0 z-30 h-[150px] w-full overflow-hidden rounded-t-3xl bg-[linear-gradient(135deg,#5962d8,#7845d5)] text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:bottom-auto md:right-0 md:top-0 md:left-auto md:h-full md:w-1/2 ${
    isLogin
      ? "md:rounded-[40px_20px_20px_40px]"
      : "md:-translate-x-full md:rounded-[20px_40px_40px_20px]"
  }`}
>
          {/* NEW HERE PANEL */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:p-10 ${
              !isLogin
                ? "-translate-y-full md:-translate-x-full md:translate-y-0"
                : "translate-y-0 translate-x-0"
            }`}
          >
            <h3 className="text-xl font-bold md:text-2xl">
              New here?
            </h3>

            <p className="hidden max-w-[240px] text-sm/[1.5] text-indigo-100 md:block">
              Create an account and start your free journey.
            </p>

            <button
              type="button"
              onClick={() => setMode("register")}
              className="mt-1.5 grid min-h-11 place-items-center rounded-full border-[1.5px] border-white px-7 text-sm font-semibold transition-colors hover:bg-white hover:text-indigo-600"
            >
              Sign up
            </button>
          </div>

          {/* ONE OF US PANEL */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:p-10 ${
              !isLogin
                ? "translate-y-0 translate-x-0"
                : "translate-y-full md:translate-x-full md:translate-y-0"
            }`}
          >
            <h3 className="text-xl font-bold md:text-2xl">
              One of us?
            </h3>

            <p className="hidden max-w-[240px] text-sm/[1.5] text-indigo-100 md:block">
              Sign in to pick up right where you left off.
            </p>

            <button
              type="button"
              onClick={() => setMode("login")}
              className="mt-1.5 grid min-h-11 place-items-center rounded-full border-[1.5px] border-white px-7 text-sm font-semibold transition-colors hover:bg-white hover:text-indigo-600"
            >
              Log in
            </button>
          </div>
        </div>

        {/* BACK TO HOME */}
        <Link
  to="/"
  aria-label="Back to home"
  title="Back to home"
  className="absolute left-5 top-5 z-[100] grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-indigo-600 hover:text-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
</Link>
      </div>
    </section>
  );
}
