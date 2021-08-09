import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { isAuthenticated, authenticate } from "../../auth";
import jwt from "jsonwebtoken";

const Signin = () => {
  const { id } = isAuthenticated();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      authenticate(data.user);
      setSuccess(true);
      // e.target.reset();
    } catch (error) {
      setError(error.response.data);
    }
  };
  const redirectUser = () => {
    if (success) {
      if (id == 1) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };
  return (
    <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
      {redirectUser()}
      <img
        className="rounded-full h-32 w-32"
        src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="user avatar"
      />
      {error && <div className="text-red-300">{error}</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
        <div className="mb-4">
          <label htmlFor="userEmail" className="sr-only">
            Email address
          </label>
          <input
            className="border-solid border border-gray-400 rounded px-2 py-3"
            type="email"
            id="userEmail"
            {...register("email")}
            placeholder="Email address"
            required
          />
        </div>
        <div>
          <label htmlFor="userEmail" className="sr-only">
            Password
          </label>
          <input
            className="border-solid border border-gray-400 rounded px-2 py-3"
            type="password"
            id="userPass"
            {...register("password")}
            placeholder="Password"
            required
          />
        </div>
        <div className="my-4 flex items-center">
          <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
          <label htmlFor="userRemember">Remember me</label>
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
          type="submit"
        >
          ĐĂNG NHẬP
        </button>
      </form>
    </div>
  );
};

export default Signin;
