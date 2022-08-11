import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import {AiOutlineWarning} from "react-icons/ai";
import {LayoutState} from "../../redux/store";
import "./notFound.css";

const NotFound = () => {
  const {navbarHeight} = useSelector((state: LayoutState) => state.layout);

  return (
    <Box
      style={{height: `calc(100vh - ${navbarHeight}px)`}}
      className="not-found"
    >
      <Box className="not-found__container">
        <AiOutlineWarning className="not-found__icon" />
        <Typography className="not-found__text" variant="h2">
          Oops!
        </Typography>
        <Typography className="not-found__text" variant="h4">
          This page doesn't exist <br /> or it's still under construction.
        </Typography>
      </Box>
    </Box>
  )
}

export default NotFound;