import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import IntroPage from "./intro";
import SignIn from "./signin";
import Dashboard from "./dashboard";
import Marketplace from "./marketplace";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);