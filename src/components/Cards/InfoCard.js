import React from "react";
export default function InfoCard({...props}){
    return(
        
            
            <div className="bg-white rounded-[4px]  mt-3 text-center shadow-md border py-3 "> {/* p-4 w-[260px] */}
                <p className="text-[#04AA6D] font-bold text-lg px-[5rem] sm:px-[8rem] lg:px-0">
                    {props.title}
                </p> 
                <p className="text-slate-500">
                {props.steamAmount}
                
                </p> 
                <p className="text-slate-500">
                {props.SBDAmount}
                
                </p> 
            </div>
         
    
    )
}