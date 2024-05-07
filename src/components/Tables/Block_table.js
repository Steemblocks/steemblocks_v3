import React from 'react';
import '../Tables/table.css'
import { useDarkMode } from "../../context/DarkModeContext";

const BlockTable = ({ Block_details }) => {
    const { isDarkMode } = useDarkMode();
    if (Block_details.length > 20) {
        Block_details = Block_details.slice(0, 21)
    }

    return (
        <div className='lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-0'>
            <h2 className='heading'>Latest Block Details</h2>
            <div className='overflow-x-auto max-w-7xl'>
            <table className='tableGeneric_block w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300' >
                <thead>
                    <tr>
                        <th>Recent Blocks</th>
                        <th>Witness</th>
                        <th>Transaction Number</th>
                        <th>Timestamp</th>
                        {/* Add more table headers for each property */}
                    </tr>
                </thead>
                <tbody>
                    {Block_details.map((object, index) => (
                        <tr key={index}>
                            <td>{object.Number}</td>
                            <td>{object.Withness}</td>
                            <td>{object.Transactions.length}</td>
                            <td>{object.Timestamp}</td>

                            {/* Render more table cells for each property */}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default BlockTable;