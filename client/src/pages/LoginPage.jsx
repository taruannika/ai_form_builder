import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.path) {
        error.response.data.path.forEach((path) => {
          setError(path, {
            type: "server",
            message: error.response?.data?.message || "An error occured",
          });
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Welcome to AI Form Builder
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                autoComplete="new-password"
                className="grow"
                placeholder="Enter email..."
                {...register("email", { required: "Email is required" })}
              />
            </label>
            {errors.email && (
              <p className="text-red-600 px-2 font-light">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                className="grow"
                placeholder="Enter password..."
                autoComplete="new-password"
                {...register("password", { required: "Password is required" })}
              />
              <p onClick={() => setShowPassword((prevState) => !prevState)}>
                {showPassword ? <BiHide /> : <BiShow />}
              </p>
            </label>
            {errors.password && (
              <p className="text-red-600 px-2 font-light">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link to={"/register"} className="underline ml-3">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
