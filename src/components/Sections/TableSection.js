import React from "react";
import InfoCard from "../Cards/InfoCard";
import BlockDetailsTable from "../Tables/BlockDetailsTable";
import ScheduledTable from "../Tables/ScheduledTable";
export default function TableSection(){
    return (
        
        <section className="mt-10  lg:ml-6  grid lg:grid-cols-12 grid-cols-1 lg:gap-3 ">
            <div className="col-span-2 text-center  sm:mx-auto mr-auto">
                <h1 className="heading2 ">Market Stats</h1>
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
               <InfoCard
               title="Current Supply"
               steamAmount="441627666.892 STEEM"
               SBDAmount="12371860.118 SBD"
               />
             
            </div>
            <div className="lg:col-start-4 col-span-8 lg:col-span-6">

            <BlockDetailsTable title="Latest Block Details"/>
            </div>
            <div className="col-span-2">

            <ScheduledTable title="Scheduled Witness"/>
            </div>
        </section>
    )
}