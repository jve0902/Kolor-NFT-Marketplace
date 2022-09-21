import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  icon: any;
  title: string;
  link: string;
}

const SideBarItem = ({ icon, title, link }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className={`flex items-center cursor-pointer ${location.pathname === link && 'bg-gradient'} py-3 px-4 rounded-2xl gap-4`} onClick={() => navigate(link)}>
        <img src={icon} alt={title} className="w-6" />
        <div className="">{title}</div>
      </div>
    </>
  )
}

export default SideBarItem;