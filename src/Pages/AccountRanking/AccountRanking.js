import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDarkMode } from "../../context/DarkModeContext";

const AccountRanking = () => {
  const { isDarkMode } = useDarkMode(); // Accessing the dark mode state
  const [rankingData, setRankingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://steemdata.justyy.workers.dev/?data=ranking&by=usd"
        );
        if (response.data && Array.isArray(response.data.data)) {
          setRankingData(response.data.data);
        } else {
          console.error(
            "Invalid or unexpected data format in API response:",
            response.data.data
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rankingData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const formatDecimal = (value) => {
    if (typeof value === "string" && value.includes(".")) {
      const splitValue = value.split(".");
      const integerPart = splitValue[0];
      const decimalPart = splitValue[1].slice(0, 1); // Slice only one digit after the period
      return `${integerPart}.${decimalPart}`;
    }
    return value;
  };

  return (
    <div
      className={`lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-2 ${
        isDarkMode ? "dark-mode md:h-screen" : "light-mode"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="sm:text-2xl text-center font-bold mb-4 mt-4">
          Account Ranking Table
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Rank
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Account
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Rep
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  SP
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Steem
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  SBD
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Own Vote
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Proxy Vote
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Power Down
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Account value (USD)
                </th>
                <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Last Activity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((data, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-200 px-4 py-2">
                    {data.rank}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap underline text-blue-600">
                    <a href={'https://steemit.com/@' + data.account} target='_blank'>{formatDecimal(data.account)}</a>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {formatDecimal(data.rep)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {formatDecimal(data.sp)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {formatDecimal(data.steem)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {formatDecimal(data.sbd)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {data.own_vote}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {data.other_vote}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {data.powerdown}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    ${formatDecimal(data.usd)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {data.ts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            disabled={indexOfLastItem >= rankingData.length}
            className={`bg-gray-200 text-gray-700 py-2 px-4 rounded ${
              indexOfLastItem >= rankingData.length
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

export default AccountRanking;
