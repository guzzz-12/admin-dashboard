import {Box, IconButton, Avatar, Badge} from "@mui/material";
import {TbWorld, TbBulb} from "react-icons/tb";
import {GiExpand} from "react-icons/gi";
import {AiOutlineBell} from "react-icons/ai";
import {BiComment} from "react-icons/bi";
import {BsListUl} from "react-icons/bs";

const NavbarItems = () => {
  const ICONS = [
    {Icon: TbWorld, badge: false},
    {Icon: TbBulb, badge: false},
    {Icon: GiExpand, badge: false},
    {Icon: AiOutlineBell, badge: 2},
    {Icon: BiComment, badge: 4},
    {Icon: BsListUl, badge: false}
  ];

  const RenderIconBtns = () => {
    return ICONS.map(({Icon, badge}, i) => {
      if(badge) {
        return (
          <IconButton key={i} className="navbar__icon-btn" size="medium">
            <Badge badgeContent={badge} color="error">
              <Icon />
            </Badge>
          </IconButton>
        )
      }

      return (
        <IconButton key={i} className="navbar__icon-btn" size="medium">
          <Icon />
        </IconButton>
      )
    })
  }
  
  return (
    <Box className="navbar__items">
      {RenderIconBtns()}
      <Avatar
        alt="User" 
        src={process.env.REACT_APP_DEFAULT_AVATAR}
      />
    </Box>
  )
}

export default NavbarItems;