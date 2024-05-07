export default function TransactionTable({...props}){
    return(
        <div className="text-center lg:flex flex-col items-center justify-center space-y-4 overflow-auto">
            <h2 className="heading2">{props.title} </h2>
        <table className="table_trans  w-full lg:w-auto">
       
            <thead>
            <tr><th>Transaction Id</th><th>Operation</th>
            <th>Account</th><th>Expiration</th>
            </tr></thead>
            <tbody><tr>
                <td>560390e58a1952b4cd3f443de149105f925d1b56</td>
                <td>vote</td>
                <td>esthy</td><td>2023-08-18T21:08:51</td>
                </tr>
                <tr><td>50df60beff7a2308a00beb4553e644da450d59a1</td><td>vote</td><td>janindu</td><td>2023-08-18T20:59:18</td></tr>
                <tr><td>1915765dde03bb64c6fd8a14d8f8488e87d27123</td><td>vote</td><td>kk2</td><td>2023-08-18T21:08:51</td></tr>
                <tr><td>a59b822a34ec87dcdc868066a8faac140b8b7803</td><td>vote</td><td>pinkbae</td><td>2023-08-18T20:59:21</td></tr>
                <tr><td>7a8da8ec0eab6b40f0785b0833a80ba70c49b91f</td><td>transfer</td><td><span> <b>From:</b>xiguang<b>To:</b>
                halleyleow</span></td><td>2023-08-18T20:59:55</td></tr>
                <tr><td>68e951450cc157aab699e7ad191cef8beeadadff</td><td>vote</td><td>dknkyz</td><td>2023-08-18T21:08:54</td></tr>
        </tbody></table></div>
    )
}