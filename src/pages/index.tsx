import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import IntroPage from "./intro";
import SignIn from "./signin";
import Dashboard from "./dashboard";
import Marketplace from "./marketplace";
import Buy from "./buy";
import MarketDashboard from "./marketdashboard";
import MarketPay from "./marketpay";
import Wallet from "./wallet";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/marketdashboard" element={<MarketDashboard />} />
          <Route path="/pay" element={<MarketPay />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);