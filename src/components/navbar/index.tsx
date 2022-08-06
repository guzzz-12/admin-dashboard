import {useEffect, useState, useRef, MutableRefObject} from "react";
import {useDispatch} from "react-redux";
import {Box, Typography} from "@mui/material";
import SearchInput from "./SearchInput";
import NavbarItems from "./NavbarItems";
import useResizeObserver from "../../hooks/useResizeObserver";
import {setNavbarHeight} from "../../redux/features/layoutSlice";
import "./navbar.scss";

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
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <NavbarItems />
      </Box>
    </nav>
  )
}

export default Navbar;