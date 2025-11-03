import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const ResetPassword = () => {
    const {resetPassword}= use(AuthContext)
    const navigate = useNavigate()
     /* handleForgetPassword */
  const handleForgetPassword = (event) => {
    event.preventDefault()
    const email = event.target.email.value;
    resetPassword(email).then(() => {
      toast.success("Please Check your email");
      event.target.reset()
      navigate('/login')
    }).catch(error =>{
      toast.error(error.message)
    })
  };
    return (
        <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Reset Your Password</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleForgetPassword}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  required
                  name="email"
                  placeholder="Enter Your Email"
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Send Email
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ResetPassword;