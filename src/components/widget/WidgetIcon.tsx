import {useEffect, useState} from "react";
import {Box} from "@mui/system";
import {FaRegUser} from "react-icons/fa";
import {BsCart} from "react-icons/bs";
import {MdOutlineMonetizationOn} from "react-icons/md";
import {WidgetType} from "./widgetData";

interface WidgetIconProps {
  type: WidgetType;
}

const WidgetIcon = ({type}: WidgetIconProps) => {
  const [bgColor, setBgColor] = useState<string>("transparent");

  useEffect(() => {
    switch(type) {
      case "user":
        setBgColor("rgba(100, 148, 237, 0.3)");
        break;        
      case "order":
        setBgColor("rgba(255, 218, 7, 0.3)");
        break;        
      case "earnings":
      case "balance":
        setBgColor("rgba(0, 128, 0, 0.3)");
        break;
      default:
        setBgColor("transparent")       
    }
  }, [type]);

  const Icon = () => {
    switch(type) {
      case "user":
        return <FaRegUser color="blue" />
      case "order":
        return <BsCart color="#a08802" />
      case "earnings":
      case "balance":
        return <MdOutlineMonetizationOn color="green" />
      default:
        return null;
    }
  }

  return (
    <Box
      style={{backgroundColor: bgColor}}
      className="widget__footer__icon"
    >
      {Icon()}
    </Box>
  )
}

export default WidgetIcon;