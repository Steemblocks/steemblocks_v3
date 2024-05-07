import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDarkMode } from "../../context/DarkModeContext";

const NewAmount = () => {
  const { isDarkMode } = useDarkMode(); // Accessing the dark mode state
  const [newAccountData, setNewAccountData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://steemdata.justyy.workers.dev/?data=newaccounts"
        );
        console.log("Response data:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setNewAccountData(response.data);
        } else {
          console.error(
            "Invalid or unexpected data format in API response:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Add code to set an error state or display an error message in the UI
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newAccountData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={`lg:w-full lg:ml-44 mx-auto sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-2 ${
        isDarkMode ? "dark-mode md:h-screen" : "light-mode"
      }`}
    >
      <div className="text-center mb-4 mt-4">
        <h1 className="sm:text-2xl text-xl font-bold mb-4 mt-4">
          New Account Table
        </h1>
        <div className="overflow-x-auto">
          <div className="max-w-screen overflow-x-auto">
            <table className="w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300">
              {/* Table header */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="bg-blue-600 px-6 py-2 text-left text-xs text-white uppercase tracking-wider">
                    Creator
                  </th>
                  <th className="bg-blue-600 px-6 py-2 text-left text-xs text-white uppercase tracking-wider">
                    Account
                  </th>
                  <th className="bg-blue-600 px-6 py-2 text-left text-xs text-white uppercase tracking-wider">
                    Block
                  </th>
                  <th className="bg-blue-600 px-6 py-2 text-left text-xs text-white uppercase tracking-wider">
                    Creation Time
                  </th>
                  {/* Add more table headers if needed */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((data, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-200 px-4 py-2">
                      {data.creator}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 underline text-blue-600">
                      <a href={'https://steemit.com/@' + data.account} target='_blank'>{data.account}</a>
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.block}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">
                      {data.time}
                    </td>
                    {/* Render other properties as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-between mt-4 mb-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`bg-gray-200 text-gray-700 py-2 px-4 rounded ${
              currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-300"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={indexOfLastItem >= newAccountData.length}
            className={`bg-gray-200 text-gray-700 py-2 px-4 rounded ${
              indexOfLastItem >= newAccountData.length
                ? "cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewAmount;
