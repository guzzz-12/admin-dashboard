import {useRef, useEffect, useState, ReactNode, useMemo} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {LayoutState} from "../redux/store";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode
}

// Rutas donde no se deben mostrar el sidebar ni el navbar
const HIDDEN_LOCATIONS = ["/login", "/signup"];

const Layout = ({children}: LayoutProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const {navbarHeight, sidebarWidth} = useSelector((state: LayoutState) => state.layout);

  const [offset, setOffset] = useState<{left: number, right: number}>({
    left: 0,
    right: 0
  });


  // Calcular la posición del contenedor interno con respecto al contenedor externo
  // cuando el contenedor externo cambie de tamaño
  const resizeObserver = useMemo(() => new ResizeObserver(() => {
    if(innerWrapperRef.current) {
      const {left, right} = (innerWrapperRef.current as HTMLDivElement)
      .getBoundingClientRect();
      
      // Actualizar el state de la posición del contenedor interno
      setOffset({left, right});
    }
  }), [innerWrapperRef]);


  /*--------------------------*/
  // Inicializar el observer
  /*--------------------------*/
  useEffect(() => {
    const element = wrapperRef.current as HTMLDivElement;

    if(element) {
      resizeObserver.observe(element);
    }

    return () => resizeObserver.unobserve(element);
  }, [wrapperRef]);

  return (
    <Box
      ref={wrapperRef}
      className="main-wrapper"
      component="div"
    >
      <Box
        ref={innerWrapperRef}
        className="inner-wrapper"
        component="div"
      >
        {/* Ocultar el navbar y el sidebar en login y signup */}
        {!HIDDEN_LOCATIONS.includes(location.pathname) &&
          <>
            <Navbar sidebarWidth={sidebarWidth} leftOffset={offset.left}/>
            <Sidebar navbarHeight={navbarHeight} leftOffset={offset.left} />
          </>
        }
        <main
          style={{
            paddingLeft: `${sidebarWidth}px`,
            paddingTop: `${navbarHeight}px`
          }}
        >
          {children}
        </main>
      </Box>
    </Box>
  )
}

export default Layout;