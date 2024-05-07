import React, { useState, useEffect, useRef } from 'react';
import '../Tables/community_report.css'
const Latest_transaction = ({ Block_Details }) => {
    const [Transactions, settransactions] = useState()
    const [BlockNumbers, setBlocknumbers] = useState([])
    const [Blockdetails, setBlockdetails] = useState([])
    const [Blockdetaildata, setBlockdetaildata] = useState()
    const [Searchtext, setSearchtext] = useState("")
    const [Searcheditem, setSearcheditem] = useState()
    const [type, settype] = useState('')
    const [ShowSearch, setShowSearch] = useState(false)
    const [flag, setflag] = useState(false)
    const [homepage, sethomepage] = useState(true)
    const [aboutpage, setaboutpage] = useState(false)
    const [communitypage, setcommunitypage] = useState(false)
    const [historypage, sethistorypage] = useState(false)
    const [withnesspage, setwithnesspage] = useState(false)
    const [Searchfailedflag, setsearchfailedflag] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [showmobilenav, setshowmobilenav] = useState(false)
    const [Blkfetchvalue, setBlkfetchvalue] = useState(false)
    const GlobalValueofBlk = useRef(0);

    useEffect(() => {
        //var GlobalValueofBlk = 0
        const fetchBlockNumber = () => {
            fetch("https://sds1.steemworld.org/blocks_api/getLastIrreversibleBlockNum")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (Blkfetchvalue) {
                    } else {
                        setBlkfetchvalue(true)
                        GlobalValueofBlk.current = data.result
                    }

                    console.log(GlobalValueofBlk)
                    const BlockObject = {
                        Number: GlobalValueofBlk.current,
                        Withness: " ",
                        Transactions: " ",
                        Timestamp: " ",
                    };
                    fetch(`https://sds1.steemworld.org/blocks_api/getBlock/${GlobalValueofBlk.current - 25}`)
                        .then(response => {
                            return response.json()
                        }).then(data => {
                            if (data.code === -1) {
                            } else {
                                GlobalValueofBlk.current++
                            }
                            console.log(data)
                            setBlockdetaildata(data)
                            BlockObject.Timestamp = data.result.timestamp
                            BlockObject.Withness = data.result.witness
                            BlockObject.Transactions = data.result.transactions

                        })
                        .catch(e => console.error(e));


                    // if (BlockNumbers.length >= 20)
                    // {
                    //   const newblcknum = BlockNumbers.slice(0, -1);
                    //   setBlocknumbers(newblcknum);            
                    // }

                    if (Blockdetails.length >= 20) {
                        const newblcdetail = Blockdetails.slice(0, -1);
                        setBlockdetails(newblcdetail);
                    }
                    let new1 = [BlockObject]
                    new1 = new1.concat(Blockdetails)
                    setBlockdetails(new1)

                    // let new2 = [BlockObject.Number]
                    // new2 = new2.concat(BlockNumbers)
                    // setBlocknumbers(new2)
                    console.log(Blockdetaildata.result.transactions)
                    // console.log(Blocktransactions) 
                    //console.log(Blockdetails)          

                    setflag(true)
                })
                .catch(e => console.error(e));
        }
        const fetchDataInterval = setInterval(fetchBlockNumber, 3000);

        return () => {
            clearInterval(fetchDataInterval);
        };


    }, [Blockdetails, Blockdetaildata, Blkfetchvalue])

    useEffect(() => {
        settransactions(Block_Details)
    }, [Block_Details])

    const renderSwitch = (obj) => {
        switch (obj.operations[0]?.[0]) {
            case 'vote':
                return obj.operations[0]?.[1].voter;
            case 'comment':
                return obj.operations[0]?.[1].author;
            case 'claim_account':
                return obj.operations[0]?.[1].creator;
            case 'feed_publish':
                return obj.operations[0]?.[1].publisher;
            case 'claim_reward_balance':
                return obj.operations[0]?.[1].account;
            case 'transfer':
                return <span> <b>From:</b>{obj.operations[0]?.[1].from}<b>To:</b>{obj.operations[0]?.[1].to}</span>;
            case 'transfer_to_vesting':
                return <span> <b>From:</b>{obj.operations[0]?.[1].from} <b>To:</b>{obj.operations[0]?.[1].to} </span>;

            case 'custom_json':
                return obj.operations[0]?.[1].required_posting_auths[0];
            default:
                return 'justty';
        }
    }

    return (
        <>

            <div className='lg:w-full sm:w-[600px] w-[320px] px-4 sm:px-6 lg:px-0'>
                <h2 className='trans-header heading'>Latest Transactions</h2>
                <div className='overflow-x-auto max-w-7xl'>
                <table className='table w-full whitespace-nowrap overflow-hidden bg-white divide-y divide-gray-300'>
                    <thead>
                        <tr>
                            <th>Transaction Id</th>
                            <th>Operation</th>
                            <th>Account</th>
                            <th>Expiration</th>
                            {/* Add more table headers for each property */}
                        </tr>
                    </thead>
                    <tbody>
                        {Transactions &&
                            Transactions.map((object, index) => (
                                <tr key={index}>
                                    <td>{object.transaction_id}</td>
                                    <td>{object.operations[0]?.[0]}</td>
                                    <td>{renderSwitch(object)}</td>
                                    <td>{object.expiration}</td>

                                </tr>

                            ))}


                    </tbody>

                </table>
                </div>
            </div>

        </>


    );
};

export default Latest_transaction;