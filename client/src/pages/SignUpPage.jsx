import { useState } from "react";
import axios from "axios";

//#region TODOS
// TODO: add hide and show password
// TODO: add form validation
// TODO: Display error messages
// TODO: Handle succesfull signup
//#endregion

const SignUpPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleUserCredentialsChange = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", userCredentials);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Create your account</p>

          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type="email"
              placeholder="Enter email..."
              autoComplete="new-password"
              name="email"
              value={userCredentials.email}
              onChange={handleUserCredentialsChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type="text"
              placeholder="Enter username..."
              autoComplete="new-password"
              name="username"
              value={userCredentials.username}
              onChange={handleUserCredentialsChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type="password"
              placeholder="Enter password..."
              autoComplete="new-password"
              name="password"
              value={userCredentials.password}
              onChange={handleUserCredentialsChange}
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              type="password"
              placeholder="Confirm password..."
              autoComplete="new-password"
              name="confirmpassword"
              value={userCredentials.confirmpassword}
              onChange={handleUserCredentialsChange}
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
          </label>

          <button className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500">
            Have an account?
            <a className="underline ml-3" href="#">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
