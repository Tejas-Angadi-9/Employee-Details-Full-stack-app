import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";

const Users = () => {
  const [empData, setEmpData] = useState(null);

  const getAllData = async () => {
    try {
      const getPeople = await fetch(`http://localhost:5000/api/v1/getallUsers`);
      const res = await getPeople.json();
      console.log(res.data);
      setEmpData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="flex items-center justify-between mr-20">
        <div>
          <h1 className="m-10 text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
            Data of all the employees
          </h1>
          <Link to={"/"}>
            <div className="flex items-center gap-2 ml-10 -mt-5 mb-3">
              <div>
                <AiFillBackward className="text-[22px] text-slate-300" />
              </div>
              <div>
                <button className="font-semibold text-[22px] text-slate-300">
                  Go back to home page
                </button>
              </div>
            </div>
          </Link>
        </div>
        <Link to={"/addemployee"}>
          <button
            type="button"
            className="flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-7 ml-10">
            Create an employee
          </button>
        </Link>
      </div>
      {empData && empData.length > 0 ? (
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {empData?.map((person) => (
                      <tr key={person._id}>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt={person._id}
                                loading="lazy"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-300">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.designation}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {person.department}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[30px] font-bold flex h-[500px] w-full items-center justify-center">
          No Entries available
        </div>
      )}
    </div>
  );
};

export default Users;
