import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center mt-[100px]">
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
            Employee Data
          </span>{" "}
          creation app
        </h1>
      </div>

      <div className="flex flex-col items-center gap-10 mt-[100px]">
        <div>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Hi there👋🏻, this is my first full stack project that uses the MERN
            stack to produce and view employee details and save them in a
            database.
          </p>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            To see the list of employees, click the button.
          </p>
        </div>

        <div className="">
          <Link to={"/viewEmployees"}>
            <button
              type="button"
              className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              View all the employees
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
