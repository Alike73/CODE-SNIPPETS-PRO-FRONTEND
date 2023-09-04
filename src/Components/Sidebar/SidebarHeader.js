import { useSelector } from "react-redux";
import { getIsOpen } from "../../Redux/SnippetsSlice";


const SidebarHeader = () => {

  const isOpen = useSelector(getIsOpen);
  
  return (
    <div className={`d-flex justify-content-center align-items-center pb-3 mb-3 border-bottom sidebar_header ${isOpen ? "open" : ""}`}>
      <i className="bi bi-boxes fs-3 me-2 sidebar_logo" />
      <span className="fs-5 fw-semibold">
        Menu
      </span>
    </div>
  )
}

export default SidebarHeader;