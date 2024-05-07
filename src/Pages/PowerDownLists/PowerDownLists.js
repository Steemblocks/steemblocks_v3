import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDarkMode } from '../../context/DarkModeContext'; // Import your DarkModeContext

const PowerDownLists = () => {
  const { isDarkMode } = useDarkMode(); // Accessing the dark mode state
  const [powerDownData, setPowerDownData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://steemdata.justyy.workers.dev/?data=ranking&by=powerdown');
        if (response.data && Array.isArray(response.data.data)) {
          setPowerDownData(response.data.data);
        } else {
          console.error('Invalid or unexpected data format in API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = powerDownData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const formatDecimal = (value) => {
    if (typeof value === 'string' && value.includes('.')) {
      const splitValue = value.split('.');
      const integerPart = splitValue[0];
      const decimalPart = splitValue[1].slice(0, 1); // Slice only one digit after the period
      return `${integerPart}.${decimalPart}`;
    }
    return value;
  };

  return (
    <div className={`lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-2 ${isDarkMode ? 'dark-mode md:h-screen' : 'light-mode'}`}>
      <h1 className="sm:text-2xl text-center font-bold mb-4 mt-4">Power Down Table</h1>
      <div className="overflow-x-auto max-w-7xl">
        <table className="w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr className=''>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Rank</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Account</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Rep</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">SP</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Steem</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">SBD</th>
            {/* <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">SBD</th> */}
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Delegation in</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Delegation out</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Own Vote</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Proxy Votes</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Active Power Down</th>
            <th className="bg-blue-600 px-6 py-2 text-left text-xs font-medium text-white uppercase tracking-wider">Last Activity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
        {currentItems.map((data, index) => (
          <tr key={index} className={(index % 2 === 0 ? 'bg-gray-50' : 'bg-white')}>
            <td className="  px-4 py-2">{formatDecimal(data.rank)}</td>
            <td className="px-6 py-4 whitespace-nowrap underline text-blue-600"><a href={'https://steemit.com/@' + data.account} target='_blank'>{data.account}</a></td>
            <td className="  px-4 py-2">{formatDecimal(data.rep)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{formatDecimal(data.sp)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.steem)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.sbd)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.sp_plus)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.sp_minus)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.own_vote)}</td>
            <td className=" px-4 py-2">{formatDecimal(data.other_vote)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.powerdown)}</td>
            <td className="  px-4 py-2">{formatDecimal(data.ts)}</td>

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
            currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastItem >= powerDownData.length}
          className={`bg-gray-200 text-gray-700 py-2 px-4 rounded ${
            indexOfLastItem >= powerDownData.length ? 'cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PowerDownLists;
