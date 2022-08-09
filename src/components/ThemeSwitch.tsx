import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme, Modes} from "../redux/features/themeSlice";
import {ThemeState} from "../redux/store";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector((state: ThemeState) => state.theme);

  /*-----------------------------------------------------*/
  // Inicializar el theme al entrar a la app o actualizar
  /*-----------------------------------------------------*/
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") as Modes;
    if(currentTheme) {
      dispatch(changeTheme(currentTheme));
    } else {
      dispatch(changeTheme("light"));
    }
  }, []);

  /*------------------------------------------------------*/
  // Actualizar las variables del theme al cambiar de modo
  /*------------------------------------------------------*/
  useEffect(() => {
    if(mode === "light") {
      document.documentElement.style.setProperty("--text-color", "var(--text-light)");
      document.documentElement.style.setProperty("--bg-color", "var(--bg-light)");
      document.documentElement.style.setProperty("--bg-card-color", "var(--bg-card-light)");
    }
    
    if(mode === "dark") {
      document.documentElement.style.setProperty("--text-color", "var(--text-dark)");
      document.documentElement.style.setProperty("--bg-color", "var(--bg-dark)");
      document.documentElement.style.setProperty("--bg-card-color", "var(--bg-card-dark)");
    }
  }, [mode]);

  return null;
}

export default ThemeSwitch;