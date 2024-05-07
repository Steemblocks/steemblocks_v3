import About from "../Pages/About";
import AccountRanking from "../Pages/AccountRanking/AccountRanking";
import Home from "../Pages/Home";
import NewAmount from "../Pages/NewAmount/NewAmount";
import PowerDownLists from "../Pages/PowerDownLists/PowerDownLists";
import PowerdownHolders from "../Pages/PowerdownHolders/PowerdownHolders";
import WithnessList from "../Pages/WithnessList/WinthnessList";
import Community_data from "../components/Tables/Community_data";
import Contenthistory from "../components/Tables/Content_history";
import Latest_transaction from "../components/Tables/Latest_transaction";

const Routes =   [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/power-holders",
      element: <PowerdownHolders />,
    },
    {
      path: "/power-down-lists",
      element: <PowerDownLists />,
    },
    {
      path: "/new-amount",
      element: <NewAmount />,
    },
    {
      path: "/acccount-ranking",
      element: <AccountRanking />,
    },
    {
      path: "/withness-list",
      element: <WithnessList />,
    },
    {
      path: "/community-data",
      element: <Community_data />,
    },  
    {
      path: "/content-history",
      element: <Contenthistory />,
    },  
    {
      path: "/about",
      element: <About />,
    },
  ]

  export default Routes;