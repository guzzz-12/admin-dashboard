import {useSelector, useDispatch} from "react-redux";
import {Drawer, Box, Typography, IconButton} from "@mui/material";
import {GrClose} from "react-icons/gr";
import SidebarAccordions from "./SidebarAccordions";
import {setOpenDrawer} from "../../redux/features/drawerSlice";

const SidebarDrawer = () => {
  const dispatch = useDispatch();
  const {openDrawer} = useSelector((state: {drawer: {openDrawer: boolean}}) => state.drawer)

  return (
    <Drawer
      className="sidebar__drawer"
      open={openDrawer}
      onClose={() => dispatch(setOpenDrawer(false))}
    >
      <aside className="sidebar--mobile">
        <Box className="sidebar__logo-wrapper">
          <IconButton
            className="sidebar--mobile__close-btn"
            size="small"
            onClick={() => dispatch(setOpenDrawer(false))}
          >
            <GrClose />
          </IconButton>
          <Typography variant="h4" className="sidebar__logo">
            Logo
          </Typography>
        </Box>
        <Box className="sidebar__list-wrapper">
          {SidebarAccordions()}
        </Box>
        <Box className="sidebar__bottom">
          <Typography variant="subtitle1" style={{opacity: 0.5}}>
            &copy;2022 Jesús Guzmán
          </Typography>
        </Box>
      </aside>
    </Drawer>
  )
}

export default SidebarDrawer;