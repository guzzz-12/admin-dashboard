import {Box, IconButton, Avatar, Badge} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {IconType} from "react-icons";
import {TbWorld, TbBulb} from "react-icons/tb";
import {AiOutlineBell} from "react-icons/ai";
import {BiComment, BiMoon} from "react-icons/bi";
import {BsListUl} from "react-icons/bs";
import {changeTheme} from "../../redux/features/themeSlice";
import {ThemeState} from "../../redux/store";

const NavbarItems = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: ThemeState) => state.theme);

  const RenderIconBtn = (Icon: IconType, badge: null | number) => {
    if(badge) {
      return (
        <IconButton className="navbar__icon-btn" size="medium">
          <Badge badgeContent={badge} color="error">
            <Icon />
          </Badge>
        </IconButton>
      )
    }

    return (
      <IconButton className="navbar__icon-btn" size="medium">
        <Icon />
      </IconButton>
    );
  }
  
  return (
    <Box className="navbar__items">
      {RenderIconBtn(TbWorld, null)}
      <IconButton
        className="navbar__icon-btn"
        size="medium"
        onClick={() => {
          mode === "light" && dispatch(changeTheme("dark"));
          mode === "dark" && dispatch(changeTheme("light"));
        }}
      >
        {mode === "light" ? <BiMoon /> : <TbBulb />}
      </IconButton>
      {RenderIconBtn(AiOutlineBell, 2)}
      {RenderIconBtn(BiComment, 4)}
      {RenderIconBtn(BsListUl, null)}
      <Avatar
        alt="User" 
        src={process.env.REACT_APP_DEFAULT_AVATAR}
      />
    </Box>
  )
}

export default NavbarItems;