import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IcoMenu from "../../assets/icons/ico_menu.svg";
import LogoIcon from "../../assets/logo/logo_icon.png";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignin = () => {
    navigate('/signin');
  }
  return (
    <>
      <div className={`flex absolute ${location.pathname === '/' || location.pathname === '/signin' ? 'justify-between' : 'justify-end'} w-full items-center h-40 top-0 z-20 px-4 tiny:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 3xl:px-48`}>
        <div className={`justify-center items-center gap-4 ${location.pathname === '/' || location.pathname === '/signin' ? 'flex' : 'hidden'} cursor-pointer`} onClick={() => navigate('/')}>
          <img src={LogoIcon} alt="logo-icon" className="w-12 md:w-16 xl:w-20" />
          <img src={Logo} alt="logo" className="w-16 md:w-20 xl:w-24" />
        </div>
        <button className="justify-center items-center hidden lg:block border border-white h-12 text-white rounded-full px-14 font-bold cursor-pointer" onClick={() => handleSignin() }>{location.pathname === "/" || location.pathname === '/signin' ? 'Sign in' : 'Sign out'}</button>

        <div className="flex md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <img src={IcoMenu} alt="menu" />
        </div>
        <div className={` fixed top-0 right-0 w-screen z-50 min-h-screen bg-black bg-opacity-90 transform shadow-lg shadow-white ${openMenu ? " -trasnlate-x-0" : " translate-x-full"} duration-200`}>
          <div className="h-36 flex bg-black items-center pr-10 justify-end" onClick={() => setOpenMenu(!openMenu)}>
            <p className="text-5xl cursor-pointer text-white">×</p>
          </div>
          <div className="w-full flex justify-center flex-col items-center gap-8 pt-10">
            <div className="flex gap-8 flex-col">
              <div className="font-sorasemibold cursor-pointer text-white" onClick={() => navigate('/dashboard')}>
                Dashboard
              </div>
              <div className="font-sorasemibold cursor-pointer text-white" onClick={() => navigate('/marketplace')}>
                Marketplace
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;