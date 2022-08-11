import {Box} from "@mui/material";
import Widget from "../../components/widget";
import Chart from "../../components/charts/Chart";
import FeaturedChart from "../../components/charts/FeaturedChart";
import TransactionsTable from "../../components/transactionsTable";
import {WIDGETS_DATA} from "../../components/widget/widgetData";
import "./home.css";

const HomePage = () => {
  return (
    <Box className="home" component="section">
      <Box className="home__widgets">
        {WIDGETS_DATA.map((item, i) => {
          return <Widget key={i} widgetData={item} />
        })}
      </Box>

      <Box className="home__charts">
        <FeaturedChart />
        <Chart chartType="bar" fillMode="solid" />
      </Box>

      <Box className="home__transactions">
        <TransactionsTable />
      </Box>
    </Box>
  )
}

export default HomePage;