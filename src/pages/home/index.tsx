import {Box} from "@mui/material";
import Layout from "../../components/Layout";
import Widget from "../../components/widget";
import {WIDGETS_DATA} from "../../components/widget/widgetData";
import "./home.css";

const HomePage = () => {
  return (
    <Layout>
      <Box className="home" component="section">
        <Box className="home__widgets">
          {WIDGETS_DATA.map((item, i) => {
            return <Widget key={i} widgetData={item} />
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default HomePage;