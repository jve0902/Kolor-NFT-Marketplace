import { useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/logo/logo_icon.png";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignin = () => {
    navigate('/signin');
  }
  return (
    <>
      <div className="flex absolute justify-between w-full items-center h-40 top-0 z-20 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48">
        <div className="flex justify-center items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <img src={LogoIcon} alt="logo-icon" className="w-12 md:w-16 xl:w-20" />
          <img src={Logo} alt="logo" className="w-16 md:w-20 xl:w-24" />
        </div>
        <button className="justify-center items-center hidden lg:block border border-white h-12 text-white rounded-full px-14 font-bold cursor-pointer" onClick={() => handleSignin() }>{location.pathname === "/" || location.pathname === '/signin' ? 'Sign in' : 'Sign out'}</button>
      </div>
    </>
  )
}

export default Header;