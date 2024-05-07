export default function CoinInfoCard(){
    return (
        <div className="border shadow-md p-5 rounded-md md:min-w-fit">
            
            <h1 className="text-2xl font-medium ">Launchpool</h1>
            <div className="">
            <div className="uppercase text-xs text-green-500 bg-green-500/10 py-1 px-1.5 rounded-md w-min flex">
            <svg className="w-3 fill-green-500" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="clock"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,12c0,0.4-0.2,0.7-0.5,0.9l-2.6,1.5
	c-0.5,0.3-1.1,0.1-1.4-0.4s-0.1-1.1,0.4-1.4l2.1-1.2V7c0-0.6,0.4-1,1-1s1,0.4,1,1V12z"></path></svg>
            FARMING
                </div>
                <div className="py-3 space-y-4">
                    <div className="flex items-center justify-between">

                    <h1 className="uppercase font-semibold text-xl text-slate-800">
                        CYBER
                    </h1>
                    <img
                    src="/icons/cybericon.svg"
                    width={48}
                    height={48}
                    alt="cyber_coin_icon"
                    />
                    </div>
                    {/* content */}
                    <div className="space-y-4 ">
                    <p
                    className="text-small-p1 max-w-[250px]"
                    >
                    A web3 social network that enables 
                    developers to create social applications.
                    </p>
                    <div className="space-y-3">
                    <p 
                    className="flex justify-between
                    items-center text-sm
                    ">
                    <span className="text-small-p2 ">Total Rewards:</span> 
                    <span
                    className=" font-semibold"
                    >3,000,000.00</span>
                    </p>
                    <p 
                    className="flex justify-between
                    items-center text-sm
                    ">
                    <span className="text-small-p2 ">Farming Period:</span> 
                    <span
                    className=" font-semibold"
                    >30day/s</span>
                    </p>
                    </div>
                    </div>
                </div>
                <div>

                    <div className="flex flex-row md:flex-col items-center justify-between border-t border-b py-3 text-small-p2">
                      <p className="text-small-p2">
                        Time untill farming ends:
                        </p>  
                        <div className="flex gap-2">
                            <span className="flex gap-0.5 items-end">
                                <p className="text-small-xl1">
                                    12
                                </p>
                                <small className="">
                                    Days
                                </small>
                            </span>
                            <span className="flex gap-0.5 items-end">
                                <p className="text-small-xl1">
                                    12
                                </p>
                                <small className="">
                                    Days
                                </small>
                            </span>
                            <span className="flex gap-0.5 items-end">
                                <p className="text-small-xl1">
                                    12
                                </p>
                                <small className="">
                                    Days
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}