
import SideBarItem from "../items/sidebaritem";
import { menuList } from "./menu";

const SideBar = () => {
  return (
    <div className="flex flex-col w-72 bg-sidebar pt-48 gap-4 px-8 text-white">
      {
        menuList.map((menu, idx) => (
          <SideBarItem key={idx} title={menu.title} icon={menu.icon} link={menu.link} />
        ))
      }
    </div>
  )
}

export default SideBar;