import SidebarTopic from "./SidebarTopic";


const SidebarModule = ({ 
  title, data_target_module, 
  target_module_collapse_id, 
  topics, isModuleCollapsed, onClickModule 
  }) => {

  return (
    <>
      <li className="mb-1">

        <button 
          className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed title_2" 
          data-bs-toggle="collapse" 
          data-bs-target={ data_target_module } 
          // aria-expanded="false"
          aria-expanded={ isModuleCollapsed }
          onClick={ onClickModule }
          >
          <i className="bi bi-asterisk me-2" />
          { title }
        </button>

        <div className={`collapse ${isModuleCollapsed ? 'show' : ''}`} id={ target_module_collapse_id }>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            { topics.map((item) => <SidebarTopic 
              title = { item.title } 
              category = { item.category } 
              key={ item.id } 

            />)}
          </ul>
        </div>

      </li>
    </>
  )
}

export default SidebarModule;