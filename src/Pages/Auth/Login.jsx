import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const newUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(newUser);
  };
  const handleGoogleSignIn = () => {};
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  required
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  required
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  LogIn
                </button>
              </fieldset>
            </form>
            <div className="font-semibold">
              <p className="">
                Haven't Your Account ! Please{" "}
                <Link
                  className="font-bold hover:underline text-green-500 hover:text-pink-500"
                  to="/register"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn w-full mt-2 bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
