import Layout from "../../layout";
import { useAppContext } from "../../context/AppContext";
import InvestmentItem from "../../components/items/investmentitem";
import { investmentList } from "./investment";
import SideBar from "../../components/sidebar";
import MiniMap from "../../assets/image/mini-map.png";
import Wallet from "../../assets/image/wallet.png";

const Dashboard = () => {
  const context = useAppContext();
  console.log('isExplored', context.clickedExplore);

  return (
    <>
      <Layout title="Dashboard">
        <div className="flex gap-16 bg-dashboard min-h-screen w-full">
          <SideBar />
          <div className="flex flex-col pt-48 w-full gap-8">
            <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-0 pl-4 tiny:pl-6 sm:pl-12 md:pl-0 pr-4 tiny:pr-6 sm:pr-12 lg:pr-0">
              <div className="flex flex-col w-full lg:w-1/2 2xl:w-3/5 border border-main rounded-3xl px-4 sm:px-6 md:px-8 py-8 gap-6">
                <img src={MiniMap} alt="mini-map" className="w-24 pt-12" />
                <div className="text-md text-white text-investment">Investment 1</div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                  <div className="flex w-full sm:w-1/2 lg:w-full xl:w-1/2 text-white">Tokens bought:</div>
                  <div className="flex flex-row sm:flex-row-reverse lg:flex-row xl:flex-row-reverse w-full sm:w-1/2 lg:w-full xl:w-1/2 text-app-dark-400">1</div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                  <div className="flex w-full sm:w-1/2 lg:w-full xl:w-1/2 text-white">Token price(in cUSD):</div>
                  <div className="flex flex-row sm:flex-row-reverse lg:flex-row xl:flex-row-reverse w-full sm:w-1/2 lg:w-full xl:w-1/2 text-app-dark-400">$1</div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                  <div className="flex w-full sm:w-1/2 lg:w-full xl:w-1/2 text-white">Total paid:</div>
                  <div className="flex flex-row sm:flex-row-reverse lg:flex-row xl:flex-row-reverse w-full sm:w-1/2 lg:w-full xl:w-1/2 text-app-dark-400">1 $cUSD</div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                  <div className="flex w-full sm:w-1/2 lg:w-full xl:w-1/2 text-white">Date of purchase:</div>
                  <div className="flex flex-row sm:flex-row-reverse lg:flex-row xl:flex-row-reverse w-full sm:w-1/2 lg:w-full xl:w-1/2 text-app-dark-400">Viernes, 24 de junio de 2022, 12:25:30 h.</div>
                </div>
                <button className="rounded-full h-12 px-4 py-2 border border-main text-white w-40">Explore Land</button>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 2xl:w-2/5 bg-token-detail lg:mx-8 mr-6 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-24 rounded-3xl px-4 md:px-8 xl:px-10 2xl:px-12 3xl:px-16 py-10 gap-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-white text-sm">Native Balances</div>
                  <div className="text-app-dark-400">Your current cUSD balance is:</div>
                  <div className="text-white text-md">$2368.10</div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex lg:flex-col xl:flex-row gap-6">
                    <div className="hidden sm:flex-col lg:hidden xl:flex flex-col items-center justify-center px-5 py-5 bg-token-light rounded-3xl">
                      <img src={Wallet} alt="wallet" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-app-main-100">Your current cUSD balance is:</div>
                      <div className="text-white text-sm">$2368.10</div>
                    </div>
                  </div>
                  <div className="flex lg:flex-col xl:flex-row gap-6">
                    <div className="hidden sm:flex-col lg:hidden xl:flex flex-col items-center justify-center px-5 py-5 bg-token-light rounded-3xl">
                      <img src={Wallet} alt="wallet" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-app-main-100">Your current Celo balance is:</div>
                      <div className="text-white text-sm">$2368.10</div>
                    </div>
                  </div>
                </div>
                <div className="flex text-md justify-center text-white items-center">Land Tokens Balances</div>
                <div className="flex flex-col">
                  <div className="flex lg:flex-col xl:flex-row gap-6">
                    <div className="hidden sm:flex-col lg:hidden xl:flex flex-col items-center justify-center px-5 py-5 bg-token-light rounded-3xl">
                      <img src={Wallet} alt="wallet" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-white text-sm">5 $tokens</div>
                      <div className="flex gap-2">
                        <div className="text-white">From</div>
                        <div className="text-app-dark-400 underline">Ignacio Garafoulich's Land</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-4 tiny:pl-6 sm:pl-12 md:pl-0 text-white text-md text-investment">
              Investment porfolio
            </div>
            <div className="pl-4 tiny:pl-6 sm:pl-12 md:pl-0 grid grid-cols-1 xl:grid-cols-2 grid-flow-row gap-12 pr-4 tiny:pr-6 sm:pr-12">
              {
                investmentList.map((investment, idx) => (
                  <InvestmentItem key={idx} title={investment.title} image={investment.image} detail={investment.detail} />
                ))
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard;

