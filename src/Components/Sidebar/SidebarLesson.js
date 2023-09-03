import { useState } from "react";
import SidebarModule from "./SidebarModule";


const SidebarLesson = ({ 
  title, data_target_title, target_collapse_id, 
  modules, isCollapsed, onClick 
}) => {


  const [myModules, setMyModules] = useState(modules);

  const handleModuleClick = (target_module_collapse_id) => {
    setMyModules((prevMyModules) => {
        const updatedModulesItems = prevMyModules.map((item) => {
            if (item.target_module_collapse_id === target_module_collapse_id) {
                return { ...item, isModuleCollapsed: !item.isModuleCollapsed };
            } else {
                return { ...item, isModuleCollapsed: false };
            }
        });
        return updatedModulesItems;
    });
  };

  return (
    <>
      <li className="mb-1">

        <button 
          className="btn d-inline-flex align-items-center collapsed title_1" 
          data-bs-toggle="collapse" 
          data-bs-target={ data_target_title } 
          // aria-expanded="false"
          aria-expanded={ isCollapsed }
          // onClick={ onClick }
          onClick={(item) => {
            onClick();
            handleModuleClick(item.target_module_collapse_id);
          }}
          >
          { title }
        </button>

        <div className={`collapse ${isCollapsed ? 'show' : ''}`} id={ target_collapse_id }>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <ul>
                { myModules.map((item) => <SidebarModule 
                  title = { item.title } 
                  data_target_module = { item.data_target_module } 
                  target_module_collapse_id = { item.target_module_collapse_id } 
                  topics = { item.topics }
                  key={ item.id }
                  isModuleCollapsed = { item.isModuleCollapsed }
                  onClickModule={() => handleModuleClick(item.target_module_collapse_id)}
                />)}
              </ul>
            </li>
          </ul>
        </div>

      </li>
      <li className="border-top my-3" />
    </>
  )
}

export default SidebarLesson;