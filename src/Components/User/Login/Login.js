import React from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import LoadingPage from "../../OtherPages/LoadingPage";

const Login = () => {
  //to login by email and password
  const [
    signInWithEmailAndPassword,
    userOfEmail,
    loadingOfEmail,
    errorOfEmail,
  ] = useSignInWithEmailAndPassword(auth);
  //to sign in by google
  const [signInWithGoogle, userOfGoog, loadingOfGoog, errorOfGoog] =
    useSignInWithGoogle(auth);
  //to create user
  const formSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  //to sign in by google
  const signInByGoogle = () => {
    signInWithGoogle();
  };
  //to show loading
  if (loadingOfEmail || loadingOfGoog) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-semibold text-center">Login</h2>
          <form onSubmit={formSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              name="email"
              id="email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              name="password"
              id="password"
            />
            <br />
            <button>Forget Password?</button>
            <input
              type="submit"
              className="btn btn-primary uppercase font-bold bg-gradient-to-r from-gray-800 mt-2 w-full to-gray-900 text-white"
              value="Login"
              id=""
            />{" "}
            <br />
          </form>
          <div class="flex flex-col w-full border-opacity-50">
            <div class="text-center rounded-box place-items-center">
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-secondary">
                Create New Account
              </Link>
            </div>
            <div class="divider">OR</div>
            <div class="rounded-box place-items-center">
              <button
                onClick={signInByGoogle}
                className="btn bg-white text-black w-full hover:text-white"
              >
                continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
