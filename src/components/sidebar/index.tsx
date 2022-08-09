import {useEffect, useRef, MutableRefObject} from "react";
import {useDispatch} from "react-redux";
import {Box, Typography} from "@mui/material";
import SidebarAccordions from "./SidebarAccordions";
import SidebarDrawer from "./SidebarDrawer";
import useResizeObserver from "../../hooks/useResizeObserver";
import {setSidebarWidth} from "../../redux/features/layoutSlice";
import "./sidebar.css";

interface SidebarProps {
  navbarHeight: number;
  leftOffset: number
}

const Sidebar = ({navbarHeight, leftOffset}: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  // Detectar el cambio en el ancho del sidebar
  const {elemWidth: sidebarWidth} = useResizeObserver({
    elementRef: sidebarRef as MutableRefObject<HTMLElement>
  });
  
  // Actualizar el width del sidebar en el state global
  // para reacomodar los elementos del dom
  useEffect(() => {
    dispatch(setSidebarWidth(sidebarWidth));
  }, [sidebarWidth]);

  return (
    <>
      <SidebarDrawer />
      <aside
        ref={sidebarRef}
        style={{left: `${leftOffset}px`}}
        className="sidebar"
      >
        <Box
          sx={{height: `${navbarHeight}px`}}
          className="sidebar__logo-wrapper"
        >
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
    </>
  )
}

export default Sidebar;