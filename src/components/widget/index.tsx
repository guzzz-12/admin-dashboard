import {Box, Typography, Link as MuiLink} from "@mui/material";
import {BsChevronUp} from "react-icons/bs";
import WidgetIcon from "./WidgetIcon";
import {WidgetData} from "./widgetData";
import "./widget.css";

interface WidgetProps {
  widgetData: WidgetData
}

const Widget = ({widgetData}: WidgetProps) => {
  return (
    <Box className="widget">
      <Box className="widget__header">
        <Typography className="widget__header__title">
          {widgetData.title}
        </Typography>
        <Box className="widget__header__right">
          <BsChevronUp/>
          <Typography>20%</Typography>
        </Box>
      </Box>

      <Box className="widget__content">
        <Typography variant="h4">
          {widgetData.isMoney && "$ "}
          {widgetData.counter}
        </Typography>
      </Box>

      <Box className="widget__footer">
        <MuiLink
          className="widget__footer__link"
          href="#"
          variant="body1"
        >
          {widgetData.link}
        </MuiLink>
        <Typography variant="h5">
          <WidgetIcon type={widgetData.type} />
        </Typography>
      </Box>
    </Box>
  )
}

export default Widget