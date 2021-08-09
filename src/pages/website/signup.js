import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signup } from '../../api/authAPI';
import { authenticate } from '../../auth';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const onSubmit = async (user, e) => {
        try {
            const { data } = await signup(user);
            authenticate(data.user)
            setSuccess(true);
            e.target.reset();
        } catch (error) {
            setError(error.response.data)
        }
    }
    return (
      <div className="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img
          className="rounded-full h-32 w-32"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="user avatar"
        />
        <hr />
        {error && <div className="alert alert-danger">{error}</div>}
        {success && (
          <div className="pt-4">
            Bạn đã đăng ký thành công. Click <Link to="/signin" className="text-red-500 font-bold">vào đây</Link>{" "}
            để login
          </div>
        )}
        <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
          <div className="mb-4">
            <label className="sr-only">Username</label>
            <input
              type="text"
              className="border-solid border border-gray-400 rounded px-2 py-3"
              {...register("username")}
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <label className="sr-only">Email</label>
            <input
              type="email"
              className="border-solid border border-gray-400 rounded px-2 py-3"
              {...register("email")}
              placeholder="Email address"
            />
          </div>
          <div className="mb-3">
            <label className="sr-only">Password</label>
            <input
              type="password"
              className="border-solid border border-gray-400 rounded px-2 py-3"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
            type="submit"
          >
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    );
}

export default Signup
