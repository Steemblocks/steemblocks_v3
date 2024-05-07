
export default function BlockDetailsTable({...props}){
    return (
        
        <div className="text-center overflow-auto">
            <h2 className="heading2">{props.title}</h2>
        <table className="table w-full lg:w-auto">
        
            <thead>
                <tr><th>Recent Blocks</th>
                <th>Witness</th>
                <th>Transaction Number</th>
                <th>Timestamp</th>
                </tr></thead><tbody>
                    <tr>
                        <td>77372935</td>
                        <td>protoss20</td>
                        <td>3</td>
                        <td>2023-08-18T20:15:03</td>
                        </tr><tr><td>77372934</td>
                        <td>steem.history</td>
                        <td>1</td>
                        <td>2023-08-18T20:15:00</td>
                        </tr><tr><td>77372933</td>
                        <td>dlike</td><td>2</td>
                        <td>2023-08-18T20:14:57</td>
                        </tr><tr><td>77372932</td>
                        <td>etainclub</td>
                        <td>3</td>
                        <td>2023-08-18T20:14:54</td>
                        </tr>
                        <tr><td>77372931</td>
                        <td>dhaka.witness</td>
                        <td>2</td>
                        <td>2023-08-18T20:14:51</td>
                        </tr><tr><td>77372930</td>
                        <td>bangla.witness</td>
                        <td>3</td>
                        <td>2023-08-18T20:14:48</td>
                        </tr><tr><td>77372929</td>
                        <td>etainclub</td>
                        <td>3</td>
                        <td>2023-08-18T20:14:45</td>
                        </tr>
                        <tr><td>77372928</td>
                        <td>dlike</td><td>3</td>
                        <td>2023-08-18T20:14:42</td>
                        </tr><tr><td>77372927</td>
                        <td>steem.history</td>
                        <td>1</td><td>2023-08-18T20:14:39</td>
                        </tr><tr><td>77372926</td>
                        <td>dev.supporters</td>
                        <td>4</td><td>2023-08-18T20:14:36</td>
                        </tr>
                        <tr><td>77372925</td><td>symbionts</td><td>2</td><td>2023-08-18T20:14:33</td></tr>
                        <tr><td>77372924</td><td>protoss20</td><td>2</td><td>2023-08-18T20:14:27</td></tr>
                        <tr><td>77372923</td><td>future.witness</td><td>3</td><td>2023-08-18T20:14:24</td></tr>
                        <tr><td>77372922</td><td>boylikegirl.wit</td><td>0</td><td>2023-08-18T20:14:21</td>
                        </tr><tr><td>77372921</td><td>alexmove.witness</td><td>2</td><td>2023-08-18T20:14:18</td>
                        </tr><tr><td>77372920</td><td>rnt1</td><td>0</td><td>2023-08-18T20:14:15</td></tr>
                        <tr><td>77372919</td><td>bangla.witness</td><td>1</td><td>2023-08-18T20:14:12</td></tr>
                        <tr><td>77372918</td><td>roadofrich</td><td>0</td><td>2023-08-18T20:14:09</td></tr>
                        <tr><td>77372917</td><td>italygame</td><td>1</td><td>2023-08-18T20:14:06</td></tr>
                        <tr><td>77372916</td><td>upvu.witness</td><td>1</td><td>2023-08-18T20:14:03</td></tr>
                        </tbody></table></div>
        
    )
}