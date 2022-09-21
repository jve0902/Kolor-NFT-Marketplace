import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import Facebook from "../../assets/icons/ico_facebook.svg";
import Google from "../../assets/icons/ico_google.svg";
import Metamask from "../../assets/icons/ico_metamask.svg";
import Email from "../../assets/icons/ico_email.svg";
import Lock from "../../assets/icons/ico_lock.svg";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout title="Sign in">
        <div className="flex bg-signin min-h-screen items-center justify-center pt-40 px-4">
          <div className="flex flex-col w-full tiny:w-96 h-136 bg-body rounded-3xl py-6">
            <div className="flex flex-col px-3 sm:px-6 items-center gap-3">
              <div className="text-white text-md py-2">Login</div>
              <button className="bg-light rounded-2xl w-full py-3 px-4">
                <div className="flex gap-3 sm:gap-6">
                  <img src={Facebook} alt="facebook" className="w-6" />
                  <div className="text-white">Continue with facebook</div>
                </div>
              </button>
              <button className="bg-light rounded-2xl w-full py-3 px-4">
                <div className="flex gap-3 sm:gap-6">
                  <img src={Google} alt="google" className="w-6" />
                  <div className="text-white">Continue with google</div>
                </div>
              </button>
              <button className="bg-light rounded-2xl w-full py-3 px-4">
                <div className="flex gap-3 sm:gap-6">
                  <img src={Metamask} alt="metamask" className="w-6" />
                  <div className="text-white">Continue with metamask</div>
                </div>
              </button>
              <div className="hidden sm:flex w-full py-4">
                <div className="text-white middle-liner items-center justify-center">o</div>
              </div>
            </div>
            <div className="flex flex-col px-3 sm:px-6 items-center gap-3 sm:gap-6 pt-4 sm:pt-0">
              <div className="flex bg-light rounded-2xl w-full py-3 px-4 gap-4">
                <img src={Email} alt="email" className="w-6" />
                <input type="text" placeholder="Email" className="w-full" />
              </div>
              <div className="flex bg-light rounded-2xl w-full py-3 px-4 gap-4">
                <img src={Lock} alt="lock" className="w-7" />
                <input type="text" placeholder="Password" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col px-3 sm:px-6 items-center gap-2 py-3">
              <div className="w-full flex flex-row-reverse text-white">
                <div className="cursor-pointer">Don't have ab account?</div>
              </div>
              <button className="button-gradient text-white w-full h-10 rounded-2xl" onClick={() => navigate('/dashboard')}>Login</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SignIn;