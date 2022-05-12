import React from "react";

const Register = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-semibold text-center">Register</h2>
          <form onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              name="name"
              id="name"
            />
            <br />
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
            <input
              type="submit"
              className="btn btn-primary uppercase font-bold bg-gradient-to-r from-gray-800 mt-2 w-full to-gray-900 text-white"
              value="Register"
              id=""
            />{" "}
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
