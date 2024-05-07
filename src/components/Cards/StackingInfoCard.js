export default function StackingInfoCard(){
    return(
        <div 
        className="space-y-10 transition-all hover:-translate-y-5 rounded-md 
        border shadow-md p-5 md:min-w-fit
        duration-500 ease-in-out cursor-pointer"
        >
            <div className="flex md:flex-col items-center justify-between ">
                <div>

                <h3 className="flex items-center gap-3">
                    <img
                    src="/icons/bnb-icon.svg"
                    alt="coin_icon"
                    height={24}
                    width={24}
                    />
                    <span>
                        BNBUSD Pool
                        
                    </span>
                </h3>
                <small className="text-small-xs1">
                        Stake FDUSD, Earn CYBER
                        </small>
                </div>

                <div className="flex justify-center items-center md:outline outline-green-500 h-20 w-20 p-3 rounded-full ">
                    <img
                    className="transform translate-x-2 relative z-[-1]"
                    src="/icons/cybericon.svg"
                    alt="coin_icon"
                    width={34}
                    height={34}
                    />
                    <img
                    className="relative z-[-2]"
                    src="/icons/bnb-icon.svg"
                    alt="coin_icon"
                    width={34}
                    height={34}
                    />
                    
                </div>
            </div>
            <div className="space-y-3 ">

            <p 
                    className="flex justify-between
                    items-center text-sm
                    ">
                    <span className="text-small-p2 ">
                        APY:
                        </span> 
                    <span
                    className=" font-semibold"
                    >30day/s</span>
                    </p>
            <p 
                    className="flex justify-between
                    items-center text-sm
                    ">
                    <span className="text-small-p2 ">
                        Total Staked:
                        </span> 
                    <span
                    className=" font-semibold"
                    >43,827,201K BNB
                    </span>
                    </p>
            </div>
            <button 
            className="bg-green-500 w-full py-2.5 rounded
            hover:bg-green-500/90 hover:scale-[102%]
            ">Stake Now</button>
        </div>
    )
}