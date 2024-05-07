import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDarkMode } from "../../context/DarkModeContext";

const WitnessList = () => {
  const { isDarkMode } = useDarkMode(); 
  const [witnessData, setWitnessData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://steemyy.com/api/steemit/ranking/"
        );
        if (response.data && Array.isArray(response.data)) {
          setWitnessData(response.data);
        } else {
          console.error(
            "Invalid or unexpected data format in API response:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDecimal = (value) => {
    if (typeof value === "string" && value.includes(".")) {
      const splitValue = value.split(".");
      const integerPart = splitValue[0];
      const decimalPart = splitValue[1].slice(0, 1);
      return `${integerPart}.${decimalPart}`;
    } else if (typeof value === "number") {
      return value.toFixed(1);
    }
    return value;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = witnessData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={`lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-2 ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <h1 className="sm:text-2xl text-center font-bold mb-4 mt-4">
        Witness Information Table
      </h1>
      <div className="overflow-x-auto">
        <table className=" px-4 sm:px-6 lg:px-2 whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {/* Add table headers for the fields */}
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Rank
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                WITNESS
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Approved votes
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Own votes
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Total Missed
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Last Block
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Feed Price
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Feed age
              </th>
              <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                Running Version
              </th>

              {/* Add headers for other fields */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentItems.map((witness, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {/* Render individual properties */}
                <td className="border border-gray-200 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-200 px-4 py-2 underline text-blue-600">
                  <a href={'https://steemit.com/@' + witness.owner} target='_blank'>{witness.owner}</a>
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.approval}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.total_votes}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.total_missed}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.last_confirmed_block_num}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.sbd_exchange_rate.base}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {formatDecimal(witness.feed_age)}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {witness.running_version}
                </td>  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-10 justify-between mt-4 mb-10">
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
          disabled={indexOfLastItem >= witnessData.length}
          className={`bg-gray-200 text-gray-700 py-2 px-4 rounded ${
            indexOfLastItem >= witnessData.length
              ? "cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WitnessList;
