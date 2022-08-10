import {useRef, MutableRefObject, useEffect} from "react";
import {useDispatch} from "react-redux";
import NavbarItems from "../navbar/NavbarItems";
import useResizeObserver from "../../hooks/useResizeObserver";
import { setRightSidebarWidth } from "../../redux/features/layoutSlice";
import "./rightSidebar.css";

interface RightSidebarProps {
  navbarHeight: number;
  rightOffset: number;
}

const RightSidebar = ({navbarHeight, rightOffset}: RightSidebarProps) => {
  const rightSidebarRef = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const {elemWidth} = useResizeObserver({
    elementRef: rightSidebarRef as MutableRefObject<HTMLElement>
  });

  useEffect(() => {
    dispatch(setRightSidebarWidth(elemWidth));
  }, [rightSidebarRef.current, elemWidth]);

  return (
    <aside
      ref={rightSidebarRef}
      style={{
        left: `calc(${rightOffset - elemWidth}px)`,
        paddingTop: `${navbarHeight}px`
      }}
      className="right-sidebar"
    >
      <NavbarItems />
    </aside>
  )
}

export default RightSidebar