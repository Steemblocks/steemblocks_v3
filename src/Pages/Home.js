import React, { useEffect, useState, useRef } from 'react'
import axios from "axios";
import BlockTable from '../components/Tables/Block_table';
import WitnessScedule from '../components/Tables/Witness_schedule';
import Steemstat from '../components/Tables/Steemstat';
import Latest_transaction from '../components/Tables/Latest_transaction';
import { useDarkMode } from "../context/DarkModeContext";
import './main.css'

const CryptoStats = ({ coin, data, isDarkMode }) => (
  <div
    className={`p-4 ${isDarkMode ? " text-white lg:h-screen" : " text-black "}`}
  >
    {data && (
      <>
        <div className="flex gap-12 flex-col py-1 mb-10 sm:ml-10">
          <table className="sm:w-[320px] text-sm text-gray-400">
            <h2
              className={`text-xl ${isDarkMode ? " text-white" : " text-black"
                } font-bold mb-4  text-center`}
            >{`${coin.toUpperCase()} Price Statistics`}</h2>
            <img
              src={data.image.large}
              alt={`${coin.toUpperCase()} Logo`}
              className="mx-auto mb-4 max-w-full h-auto"
              style={{ maxWidth: "50px" }}
            />
            <tbody className="">
              <tr className="bg-[#ddd]">
                <td className="px-2 py-4 text-black flex justify-between">
                  {" "}
                  <p>{coin.toUpperCase()} price: </p>
                  <p>${data.market_data.current_price.usd.toFixed(3)}</p>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-4 bg-[#f2f2f2] text-black flex justify-between">
                  <p>Price Change 24h:</p>
                  <p>${data.market_data.price_change_24h.toFixed(4)}</p>
                </td>
              </tr>
              <tr className="bg-[#ddd]">
                <td className="px-2 py-4 text-black flex justify-between">
                  <p>Total Volume:</p>
                  <p>${data.market_data.total_volume.usd}</p>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-4 bg-[#f2f2f2] text-black flex justify-between">
                  {" "}
                  <p>Price Percentage Change 24h: </p>
                  <p>{data.market_data.price_change_percentage_24h.toFixed(3)}%</p>
                </td>
              </tr>
              <tr className="bg-[#ddd]">
                <td className="px-2 py-4 text-black flex justify-between">
                  <p>Market Cap :</p>
                  <p>{data.market_data.market_cap.usd || "∞"}</p>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-4 bg-[#f2f2f2] text-black flex justify-between">
                  {" "}
                  <p>Rank: </p>
                  <p>{data.market_data.market_cap_rank}</p>
                </td>
              </tr>

              <tr className="bg-[#ddd]">
                <td className="px-2 py-4 text-black flex justify-between">
                  {" "}
                  <p>
                    <p>Circulating Supply: </p>
                  </p>
                  <p>{data.market_data.circulating_supply.toFixed(3)}</p>
                </td>
              </tr>

              <tr className="">
                <td className="px-2 py-4 bg-[#f2f2f2] text-black flex justify-between">
                  <p>Total Supply :</p>
                  <p>{data.market_data.total_supply || "null"}</p>
                </td>
              </tr>

              <tr className="bg-[#ddd]">
                <td className="px-2 py-4 text-black flex justify-between">
                  {" "}
                  <p>All Time High: </p>
                  <p>${data.market_data.ath.usd.toFixed(3)}</p>
                </td>
              </tr>
              <tr className="">
                <td className="px-2 py-4 bg-[#f2f2f2] text-black flex justify-between">
                  <p>All Time Low: </p>
                  <p>${data.market_data.atl.usd.toFixed(3)}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )}

  </div>
);

const Home = () => {
  const [steemStats, setSteemStats] = useState(null);
  const [sbdStats, setSbdStats] = useState(null);
  const [trxStats, setTrxStats] = useState(null);
  const { isDarkMode } = useDarkMode();

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
    const fetchCryptoStats = async (coin, setter) => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coin}`
        );
        setter(response.data);
      } catch (error) {
        console.error(`Error fetching ${coin} stats:`, error);
      }
    };

    fetchCryptoStats("steem", setSteemStats);
    fetchCryptoStats("steem-dollars", setSbdStats);
    fetchCryptoStats("tron", setTrxStats);
  }, []);

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

  return (
    <div className={isDarkMode ? "dark-mode text-white" : "light-mode "}>

      <div className='flex-container'>
        {flag &&
          <div className='block1'>
            <Steemstat></Steemstat>

          </div>

        }

        {flag &&
          <div className='Block-Withness block2'>
            <BlockTable className='component' Block_details={Blockdetails}></BlockTable>

          </div>

        }

        {flag &&
          <div className='Block-Withnessscedule block3'>
            <WitnessScedule className='component'></WitnessScedule>
          </div>

        }
      </div>

      

      <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* ml-16 lg:ml-0 */}
        <CryptoStats coin="steem" data={steemStats} isDarkMode={isDarkMode} />
        <CryptoStats coin="sbd" data={sbdStats} isDarkMode={isDarkMode} />
        <CryptoStats coin="tron" data={trxStats} isDarkMode={isDarkMode} />
      </div>

      <div>
        {flag &&
          <Latest_transaction Block_Details={Blockdetaildata.result.transactions}></Latest_transaction>
        }
      </div>

    </div>
  );
};

export default Home;
