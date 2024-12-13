import { useForm } from "react-hook-form";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

//#region TODOS

// TODO: Handle succesfull signup
//#endregion

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmpassword: false,
  });

  const [serverError, setServerError] = useState("");

  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signUp(data);
      // const response = await axios.post("/api/auth/register", data);
      // successfull signup
      // console.log(response.data);
    } catch (error) {
      if (error.response.data.path) {
        error.response.data.path.forEach((path) => {
          setError(path, {
            type: "server",
            message: error.response.data.message,
          });
        });
      } else {
        console.log("Error:", error.response.data.message);
        setServerError(error.response?.data?.message || "An error occured");
      }
    }
  };
  return (
    <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Create your account</p>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                className="grow"
                type="email"
                placeholder="Enter email..."
                autoComplete="new-password"
                name="email"
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
                className="grow"
                type="text"
                placeholder="Enter username..."
                autoComplete="new-password"
                name="username"
                {...register("username", { required: "Username is required" })}
              />
            </label>
            {errors.username && (
              <p className="text-red-600 px-2 font-light">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                className="grow"
                type={showPassword.password ? "text" : "password"}
                placeholder="Enter password..."
                autoComplete="new-password"
                name="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <p
                className="cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              >
                {showPassword.password ? <BiHide /> : <BiShow />}
              </p>
            </label>
            {errors.password && (
              <p className="text-red-600 px-2 font-light">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                className="grow"
                type={showPassword.confirmpassword ? "text" : "password"}
                placeholder="Confirm password..."
                autoComplete="new-password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Confirm password is required",
                })}
              />
              <p
                className="cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirmpassword: !showPassword.confirmpassword,
                  })
                }
              >
                {showPassword.confirmpassword ? <BiHide /> : <BiShow />}
              </p>
            </label>
            {errors.confirmpassword && (
              <p className="text-red-600 px-2 font-light">
                {errors.confirmpassword.message}
              </p>
            )}
          </div>

          {serverError && <p className="text-red-600 p-3">{serverError}</p>}

          <button className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Have an account?
            <Link to={"/login"} className="underline ml-3">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
