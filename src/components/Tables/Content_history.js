import React, { useState } from 'react';
// import TextField from "@mui/material/TextField";
import '../Tables/community_report.css'
const Contenthistory = () => {
    const [flag, setflag] = useState(false)
    const [serchtext, setsearchtext] = useState('')
    const [item, setitem] = useState()

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setflag(false)
        setsearchtext(lowerCase);
    };

    const handleSearch = () => {
        const dividedString = serchtext.split('/');
        const lengthstring = dividedString.length
        const account_raw = dividedString[lengthstring - 2]
        const account = account_raw.slice(1)
        const linkid = dividedString[lengthstring - 1]
        console.log(account, linkid)
        fetch(`https://sds1.steemworld.org/content_history_api/getContentHistory/${account}/${linkid}`)
            .then(response => {
                return response.json()
            }).then(data => {
                // console.log(data.result.rows)
                //setitem(data.result.rows);
                // setflag(true);
                if (data.result.rows) {

                    setitem(data.result.rows);


                } else {
                    setitem(null)
                }

                setflag(true);


            })
            .catch(e => console.error(e));

        console.log(item)



    };

    return (
        <>


            <div className='ml-4 md:ml-0 flex flex-col items-center justify-evenly' >
                {/* communityclass */}
                <div className='text-3xl font-bold mt-3'><h2>Content History</h2></div>
                {/* descriptionpage */}
                <div className='flex' >
                    {/* com-container */}
                    <textarea className='border mt-3 p-2 w-52 md:w-96 h-10 md:h-12 mr-1 rounded-md' placeholder='perlink' onChange={inputHandler}></textarea>
                    {/* <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          InputProps={{
            style: {
              borderRadius: '4px',
              marginTop: '10px' ,
              padding: '6px 8px',
              width: '360px',
              height: '30px',
              background:'none',
            },
          }}
          label='Search'
          placeholder='perlink'
        /> */}
                    <button className='btn-com' onClick={handleSearch}>Search</button>
                </div>
                {flag && !item &&
                    <div><h2>No search data available to show <br /> <b>Do check you have given correct input</b></h2></div>

                }

                {flag && item &&
                    <div className='comm-table mt-4 lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-0'>
                        <h2 className='text-center text-xl font-bold'>History</h2>
                        <div className='overflow-x-auto max-w-7xl'>
                        <table className='table_history w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300' >
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    {/* Add more table headers for each property */}
                                </tr>
                            </thead>
                            <tbody>
                                {item.map((object, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{object[2]}</td>
                                        <td>{object[3]}</td>
                                        {/* Render more table cells for each property */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>

                }

            </div>

        </>
    );
};

export default Contenthistory;
