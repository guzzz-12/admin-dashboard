import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {AiOutlineBarChart, AiOutlineBell, AiOutlineCreditCard, AiOutlineDashboard, AiOutlineUser, AiOutlineLogout} from "react-icons/ai";
import {HiOutlineTruck, HiTemplate} from "react-icons/hi";
import {MdOutlineHealthAndSafety, MdSettings} from "react-icons/md";
import {BsCardChecklist} from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";
// import {FiChevronDown} from "react-icons/fi";

const SidebarAccordions = () => {
  const content = [
    {title: "main", links: [{text: "Dashboard", path: "/", Icon: AiOutlineDashboard}]},
    {title: "lists", links: [
      {text: "Users", path: "/users", Icon: AiOutlineUser},
      {text: "Products", path: "/products", Icon: HiTemplate},
      {text: "Orders", path: "/orders", Icon: AiOutlineCreditCard},
      {text: "Delivery", path: "/delivery", Icon: HiOutlineTruck}
    ]},
    {title: "useful", links: [
      {text: "Stats", path: "/stats", Icon: AiOutlineBarChart},
      {text: "Notifications", path: "/notifications", Icon: AiOutlineBell}
    ]},
    {title: "service", links: [
      {text: "System health", path: "/system-status", Icon: MdOutlineHealthAndSafety},
      {text: "Logs", path: "/logs", Icon: BsCardChecklist},
      {text: "Settings", path: "/settings", Icon: MdSettings}
    ]},
    {title: "user", links: [
      {text: "Profile", path: "/profile", Icon: BiUserCircle},
      {text: "Logout", path: "/logout", Icon: AiOutlineLogout}
    ]}
  ];


  // Expandir todos los acordiones
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>(() => {
    return content.map((el, i)=> i)
  });


  // const onChangeHandler = (i: number) => {
  //   setExpandedIndexes(prev => {
  //     if(!prev.includes(i)) {
  //       return [...prev, i]
  //     }

  //     return [...prev].filter(el => el !== i);
  //   })
  // }
  

  return content.map((item, i) => {
    return (
      <Accordion
        key={i}
        className="sidebar__accordion"
        disableGutters
        expanded={expandedIndexes.includes(i)}
        // onChange={() => onChangeHandler(i)}
      >
        <AccordionSummary
          sx={{my: 0}}
          className="sidebar__accordion-title"
          // expandIcon={<FiChevronDown />}
        >
          <Typography variant="body2" fontWeight={700}>
            {item.title.toUpperCase()}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="sidebar__accordion-details">
          <ul className="sidebar__list">
            {item.links.map(({text, path, Icon}, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={path}
                    className={({isActive}) => {
                      return isActive ? "sidebar__link sidebar__link--active" : "sidebar__link";
                    }}
                  >
                    <Icon fontSize="18px" color="cornflowerblue" />
                    <Typography variant="body1">
                      {text}
                    </Typography>
                  </NavLink>
                </li>
              )
            })}            
          </ul>
        </AccordionDetails>
      </Accordion>
    );      
  });
}

export default SidebarAccordions;