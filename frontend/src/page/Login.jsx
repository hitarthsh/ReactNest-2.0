import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useState } from "react"; // ✅ you forgot this

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // ✅ toggle state

  const LoginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset(); // optional reset after submit
  };

  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col w-1/2 justify-start items-start"
    >
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
        placeholder="john@deo.com"
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
        Login User
      </button>

      <p className="mt-5">
        Don&apos;t have an account?{" "}
        <Link className="text-blue-400" to="/Register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
