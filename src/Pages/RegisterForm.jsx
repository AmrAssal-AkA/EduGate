import React, { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
    classList: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-100">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-2">Sign up </h2>
        <p className="text-center text-gray-500 mb-8">
        Fill out the form carefully for registration
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-semibold mb-1">Student Name</label>
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-xs text-gray-400">First Name</span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                  <span className="text-xs text-gray-400">Last Name</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block font-semibold mb-1">E-mail Address</label>
              <input
                type="email"
                name="email"
                placeholder="ex: myname@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded mb-1 focus:outline-none focus:ring-2 focus:ring-green-600"
                value={form.email}
                onChange={handleChange}
                required
              />
              <span className="text-xs text-gray-400">example@example.com</span>
            </div>
            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <select
                name="gender"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Primary class</label>
              <select
                name="classList"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                value={form.classList}
                onChange={handleChange}
                required
            >
                <option value="">Please Select</option>
                <option value="Data Analyst">data Analyst</option>
                <option value="Game-Design/Development">Game Design/Development</option>
                <option value="webprogramming">web-programming</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Cloud Computing">Cloud Computing</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">UserName</label>
              <input
                type="text"
                name="username"
                placeholder="ex-AmrAssal"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                value={form.username}
                onChange={handleChange}
                required
            />
            </div>
        </div>
        <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-12 py-2 rounded mt-4 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;