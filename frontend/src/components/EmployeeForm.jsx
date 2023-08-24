import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {
    try {
      const userResponse = await fetch(
        "http://localhost:5000/api/v1/createEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data }),
        }
      );

      console.log("Successfully created a employee entry ", userResponse);
      navigate("/viewEmployees");
    } catch (err) {
      console.log("Error in creating employee's details");
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-[40px]">Add a new Employee</h1>
      <form
        onSubmit={handleSubmit(createEmployee)} // Corrected typo here
        className="flex flex-col gap-2"
        autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          placeholder="Enter You Full Name"
          {...register("name")}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          placeholder="Enter You Email"
          {...register("email")}
          required
        />
        <label htmlFor="Designation">Designation: </label>
        <input
          type="text"
          id="Designation"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          placeholder="Enter You designation"
          {...register("designation")}
          required
        />
        <label htmlFor="role">Role: </label>
        <input
          type="text"
          id="role"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          placeholder="Enter You role"
          {...register("role")}
          required
        />
        <label htmlFor="department">Department: </label>
        <input
          type="text"
          id="department"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          placeholder="Enter You department"
          {...register("department")}
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-7 ml-10">
          Create an employee
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 h-4 w-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
