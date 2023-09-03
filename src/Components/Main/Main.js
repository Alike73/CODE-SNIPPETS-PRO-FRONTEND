
import { useDispatch, useSelector } from 'react-redux';
import Content from "../Content/Content";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { getIsActiveIco, getIsOpen, setActiveIco, setIsOpen } from '../../Redux/SnippetsSlice';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import SidebarHeader from '../Sidebar/SidebarHeader';


const Main = () => {

  const isActiveIco = useSelector(getIsActiveIco);
  const isOpen = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const toggleIconAndSideBar = () => {
    dispatch(setActiveIco(!isActiveIco));
    dispatch(setIsOpen(!isOpen));
  }

  return (
    <div className="main_page">
      <SidebarToggle toggleIconAndSideBar = { toggleIconAndSideBar } />
      <Header />
      <SidebarHeader />
      <Sidebar />
      <Content />
    </div>
  )
}

export default Main;