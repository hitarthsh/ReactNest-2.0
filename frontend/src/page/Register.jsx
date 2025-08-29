import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate
import { useState } from "react";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ correct hook
  const dispatch = useDispatch();

  const RegisterHandler = async (user) => {
    user.id = nanoid();
    user.isAdmin = false;

    // Dispatch the async action
    await dispatch(asyncregisteruser(user));

    reset(); // clear form after submit

    // optional: small delay so toast shows before navigation
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col w-1/2 justify-start items-start"
    >
      {/* Username */}
      <input
        {...register("username", { required: "Username is required" })}
        className="mb-1 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="John-Doe"
      />
      {errors.username && (
        <p className="text-red-500 text-sm mb-3">{errors.username.message}</p>
      )}

      {/* Email */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        className="mb-1 outline-0 border-b p-2 text-4xl"
        type="email"
        placeholder="john@doe.com"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>
      )}

      {/* Password with 🔓 / 🔒 toggle */}
      <div className="flex items-center w-full mb-1 border-b relative">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters",
            },
          })}
          className="flex-1 outline-0 p-2 text-4xl pr-12"
          type={showPassword ? "text" : "password"}
          placeholder="********"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 text-2xl cursor-pointer hover:scale-110 transition-transform"
        >
          {showPassword ? "🔓" : "🔒"}
        </button>
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm mb-3">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 mt-5 rounded"
      >
        Register User
      </button>

      <p className="mt-5">
        Already have an account?{" "}
        <Link className="text-blue-400" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
