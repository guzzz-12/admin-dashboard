import {useState} from "react";
import {Link} from "react-router-dom";
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
      {text: "Orders", path: "/", Icon: AiOutlineCreditCard},
      {text: "Delivery", path: "/", Icon: HiOutlineTruck}
    ]},
    {title: "useful", links: [
      {text: "Stats", path: "/", Icon: AiOutlineBarChart},
      {text: "Notifications", path: "/", Icon: AiOutlineBell}
    ]},
    {title: "service", links: [
      {text: "System health", path: "/", Icon: MdOutlineHealthAndSafety},
      {text: "Logs", path: "/", Icon: BsCardChecklist},
      {text: "Settings", path: "/", Icon: MdSettings}
    ]},
    {title: "user", links: [
      {text: "Profile", path: "/", Icon: BiUserCircle},
      {text: "Logout", path: "/", Icon: AiOutlineLogout}
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
                  <Link className="sidebar__link" to={path}>
                    <Icon fontSize="18px" color="cornflowerblue" />
                    <Typography variant="body1">
                      {text}
                    </Typography>
                  </Link>
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