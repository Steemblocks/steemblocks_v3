import React, { useState } from 'react';
// import { TextField } from '@mui/material';
import '../Tables/community_report.css'
const Community_data = () => {
  const [flag, setflag] = useState(false)
  const [serchtext, setsearchtext] = useState('')
  const [item, setitem] = useState()

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setflag(false)
    setsearchtext(lowerCase);
  };

  const handleSearch = () => {
    fetch(`https://sds1.steemworld.org/communities_api/getCommunity/${serchtext}`)
      .then(response => {
        return response.json()
      }).then(data => {
        console.log(data)
        if (data.result) {

          setitem(data.result);


        } else {
          setitem(null)
        }

        setflag(true);


      })
      .catch(e => console.error(e));

    console.log(item)



  };

  return (
    <div className=''>
    <div className='ml-4 md:ml-0 flex flex-col items-center justify-evenly' >
      {/* communityclass */}
      <div className='text-3xl font-bold mt-3'><h2>Community</h2></div>
      {/* descriptionpage */}
      <div className='flex' >
      {/* com-container */}
        <textarea className='border mt-3 p-2 w-52 md:w-96 h-10 md:h-12 mr-1 rounded-md' placeholder='hive-****' onChange={inputHandler}></textarea>
        {/* {<TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              borderRadius: '4px',
              marginTop: '10px',
              padding: '6px 8px',
              width: '360px',
              height: '30px',
            },
          }}
          label='Search'
          placeholder='hive-****'
        />} */}
        <button className='btn-com' onClick={handleSearch}>Search</button>
      </div>
      {flag && !item &&
        <div><h2>No search data available to show <br /> <b>Do check you have given correct input</b></h2></div>

      }



      {flag && item &&
        <div className='mt-4 lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-0'>
          <h2 className='text-center text-xl font-bold'>Community Data</h2>
          <div className='overflow-x-auto max-w-7xl'>
          <table className='tableGeneric_block w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300' >
          {/* ml-12 md:ml-0 */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Account</th>
                <th>Title</th>
                <th>Rank</th>
                <th>Active Authors</th>
                <th>Subscribers</th>


                {/* Add more table headers for each property */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.account}</td>
                <td>{item.title}</td>
                <td>{item.rank}</td>
                <td>{item.count_authors}</td>
                <td>{item.count_subs}</td>


                {/* Render more table cells for each property */}
              </tr>
            </tbody>
          </table>
          </div>
        </div>

      }

    </div>
    </div>

  );
};

export default Community_data;