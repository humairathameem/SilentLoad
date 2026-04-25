import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import Field from "../components/Field";
import IconInput from "../components/IconInput";

const AuthScreen = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FB]">

      {/* Gradient bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" />

      <div className="flex-1 flex flex-col px-6 pt-10 pb-8">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/silentloadlogo-removebg-preview.png"
            alt="SilentLoad"
            className="relative z-10 w-64 object-contain drop-shadow-xl"
          />
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            {isLogin ? "Welcome back ✨" : "Hey there 🌸"}
          </h1>

          <p className="text-sm text-gray-400">
            {isLogin
              ? "Your calm space is ready for you."
              : "Let’s protect your energy together."}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex mb-7 p-1 rounded-xl bg-gray-200">
          {["Login", "Sign Up"].map((tab, i) => {
            const active = (i === 0) === isLogin;

            return (
              <button
                key={tab}
                onClick={() => setIsLogin(i === 0)}
                className={`flex-1 py-2 rounded-lg text-sm transition ${
                  active
                    ? "bg-white text-gray-800 shadow"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">

          {!isLogin && (
            <Field label="Your Name">
              <IconInput
                id="name"
                type="text"
                placeholder="e.g. Sarah"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                icon={User}
              />
            </Field>
          )}

          <Field
            label="Email"
            hint={!isLogin ? "We’ll never share this." : undefined}
          >
            <IconInput
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              icon={Mail}
            />
          </Field>

          <Field
            label="Password"
            hint={!isLogin ? "At least 8 characters." : undefined}
            action={
              isLogin && (
                <button type="button" className="text-xs text-pink-400">
                  Forgot?
                </button>
              )
            }
          >
            <IconInput
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(v) => setFormData({ ...formData, password: v })}
              icon={Lock}
              rightEl={
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />
          </Field>

          {/* CTA */}
          <div className="mt-auto pt-5">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-pink-400 via-purple-500 to-purple-700 shadow-lg"
            >
              {isLogin ? "Continue" : "Create Account"}
              <ArrowRight size={16} />
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-5 mb-1">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-300">
                or continue with
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl mt-3 bg-white border border-gray-200 shadow-sm"
            >
              <span className="text-sm font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-xs text-gray-300">
          Your mental load, managed gently 🌿
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
