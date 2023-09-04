import { useSelector } from "react-redux";
import { getIsOpen } from "../../Redux/SnippetsSlice";
import SidebarLesson from "./SidebarLesson";
import { useEffect, useState } from "react";
import dataSidebar from "../Data/dataSidebar";


const Sidebar = () => {


  const [sidebarItems, setSidebarItems] = useState([]);
  const isOpen = useSelector(getIsOpen);

  useEffect(() => {
    setSidebarItems(dataSidebar);
  }, [])

  const handleMenuClick = (target_collapse_id) => {
    setSidebarItems((prevSidebarItems) => {
        const updatedSidebarItems = prevSidebarItems.map((item) => {
            if (item.target_collapse_id === target_collapse_id) {
                return { ...item, isCollapsed: !item.isCollapsed };
            } else {
                return { ...item, isCollapsed: false };
            }
        });
        return updatedSidebarItems;
    });
  };
  
  return (
    <div className={`flex-shrink-0 my_sidebar ${isOpen ? "open" : ""}`}>
      <ul className="list-unstyled ps-0 menu_bar">
        { sidebarItems.map((item) => <SidebarLesson 
          title = { item.title } 
          data_target_title = { item.data_target_title } 
          target_collapse_id = { item.target_collapse_id } 
          modules = { item.modules }
          key={ item.id }
          isCollapsed = { item.isCollapsed }
          onClick={() => handleMenuClick(item.target_collapse_id)}
          
        />)}
      </ul>
    </div>
  )
}

export default Sidebar;