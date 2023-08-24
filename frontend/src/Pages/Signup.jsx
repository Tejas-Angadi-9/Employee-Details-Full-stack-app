import React from "react";
import { Link } from "react-router-dom";
import signupImg from "../images/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg";
import EmployeeForm from "../components/EmployeeForm";
import { AiFillBackward } from "react-icons/ai";

const Signup = () => {
  return (
    <div>
      <div className="flex justify-between px-20 pt-20 items-center">
        <img
          src={signupImg}
          alt=""
          width={"700px"}
          className="bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-[20px]"
          loading="lazy"
        />
        <div>
          <Link to={"/viewEmployees"}>
            <div className="flex items-center gap-2">
              <div>
                <AiFillBackward className="text-[22px] text-purple-700 mt-1" />
              </div>
              <div>
                <button className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-[22px] font-bold">
                  Go back to the list of employees
                </button>
              </div>
            </div>
          </Link>
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
