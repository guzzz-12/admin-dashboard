import { Typography } from "@mui/material";
import Layout from "../../components/Layout";
import "./home.css";

const HomePage = () => {
  return (
    <Layout>
      <section className="home">
        <Typography className="home__title" variant="h2">
          Home page
        </Typography>
      </section>
    </Layout>
  )
}

export default HomePage;