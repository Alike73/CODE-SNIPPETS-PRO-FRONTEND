
import './SidebarToggle.css';
import { useSelector } from "react-redux";
import { getIsActiveIco } from "../../Redux/SnippetsSlice";


const SidebarToggle = ({ toggleIconAndSideBar }) => {

  const isActiveIco = useSelector(getIsActiveIco);

  return (
    <button 
        onClick={toggleIconAndSideBar} 
        className={isActiveIco ? "hamburger hamburger--arrowalt is-active" : "hamburger hamburger--arrowalt"} 
        type="button">
        <span className="hamburger-box">
        <span className="hamburger-inner" />
        </span>
    </button>
  )
}

export default SidebarToggle;