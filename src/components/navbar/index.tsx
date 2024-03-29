import {useEffect, useState, useRef, MutableRefObject} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Box, Typography, IconButton} from "@mui/material";
import {AiOutlineMenu} from "react-icons/ai";
import SearchInput from "./SearchInput";
import NavbarItems from "./NavbarItems";
import useResizeObserver from "../../hooks/useResizeObserver";
import {setNavbarHeight} from "../../redux/features/layoutSlice";
import {setOpenDrawer} from "../../redux/features/drawerSlice";
import "./navbar.css";

interface NavbarProps {
  sidebarWidth: number;
  leftOffset: number
}

const Navbar = ({sidebarWidth, leftOffset}: NavbarProps) => {
  const navbarRef = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Detectar los cambios en el height del navbar
  const {elemHeight: navbarHeight} = useResizeObserver({
    elementRef: navbarRef as MutableRefObject<HTMLElement>
  });

  // Actualizar el height del navbar en el state global
  // para reacomodar los elementos del dom
  useEffect(() => {
    dispatch(setNavbarHeight(navbarHeight));
  }, [navbarHeight]);

  return (
    <nav
      ref={navbarRef}
      style={{paddingRight: `${leftOffset}px`}}
      className="navbar"
    >
      <Box
        style={{marginLeft: `calc(${sidebarWidth}px + ${leftOffset}px)`}}
        className="navbar__content"
      >
        <Box className="navbar__left">
          <IconButton
            className="navbar__open-drawer-btn"
            onClick={() => dispatch(setOpenDrawer(true))}
          >
            <AiOutlineMenu />
          </IconButton>
          <Box className="navbar__logo">
            <Typography variant="h4">
              <Link to="/">Logo</Link>
            </Typography>
          </Box>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Box>

        <Box className="navbar__items-wrapper">
          <NavbarItems />
        </Box>
      </Box>
    </nav>
  )
}

export default Navbar;