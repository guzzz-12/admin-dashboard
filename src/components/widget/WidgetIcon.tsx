import {Box} from "@mui/system";
import {FaRegUser} from "react-icons/fa";
import {BsCart} from "react-icons/bs";
import {MdOutlineMonetizationOn} from "react-icons/md";
import {WidgetType} from "./widgetData";

interface WidgetIconProps {
  type: WidgetType;
}

const WidgetIcon = ({type}: WidgetIconProps) => {
  const Icon = () => {
    switch (type) {
      case "user":
        return <FaRegUser />
      case "order":
        return <BsCart />
      case "earnings":
      case "balance":
        return <MdOutlineMonetizationOn />
      default:
        return null;
    }
  }

  return (
    <Box className="widget__icon">
      {Icon()}
    </Box>
  )
}

export default WidgetIcon;