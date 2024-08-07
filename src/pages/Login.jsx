import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import toast from "react-hot-toast";

function Login() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      dispatch(login(storedUser));
      toast?.success("Logged In Successfully!", { id: login });
      navigate("/");
    } else {
      toast?.error("Invalid email or password", { id: login });
    }
  };

  return (
    <section className={`${isDarkMode && "dark"}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white dark:bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold dark:text-white">
                  Login
                </h1>
              </div>
              <form onSubmit={handleLoginSubmit}>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-white sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        name="email"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100  dark:bg-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Email Address
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100  dark:bg-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="w-full flex justify-center">
              <Link to={"/signup"}>
                <button className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
