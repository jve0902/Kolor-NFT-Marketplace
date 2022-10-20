
import { useNavigate } from "react-router-dom";
import Layout from "../../layout";
import SideBar from "../../components/sidebar";
import Map from "../../assets/image/map.png";

const MarketDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout title="Marketplace Dashboard">
        <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 bg-dashboard min-h-screen w-full">
          <SideBar />
          <div className="flex flex-col w-full pt-48 pb-16 gap-6 items-center justify-center pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-8 md:pl-12 lg:pr-8 xl:pr-16">
            <div className="flex flex-col lg:flex-row bg-sidebar rounded-3xl px-4 md:px-8 lg:px-12 xl:px-16 py-16 gap-8">
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <img src={Map} alt="map" className="" />
                <div className="text-white text-sm">Ignacio Garafoulich's Land</div>
                <button className="text-white py-1 rounded-full border border-main w-48">Contact</button>
              </div>
              <div className="flex flex-col gap-8">
                <div className="text-app-dark-400 text-sm">Land details</div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Land Owner:</div>
                    <div className="flex text-app-main-100">Sociedad Humboldt SPA</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Land Owner Address:</div>
                    <p className="w-full truncate text-app-main-100 break-normal">0xF600...</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Country:</div>
                    <div className="flex text-app-main-100">Chile</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">State of region:</div>
                    <div className="flex text-app-main-100">Aysen</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">City:</div>
                    <div className="flex text-app-main-100">Comuna Lago Verde</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Size (m2):</div>
                    <div className="flex text-app-main-100">120000</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Estimated Initial TCO2 projected per year:</div>
                    <div className="flex text-app-main-100">448</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">Estimated Current TCO2 projected per year:</div>
                    <div className="flex text-app-main-100">448</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">TCO2 sold from this land:</div>
                    <div className="flex text-app-main-100">0</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex text-white">This land was created on:</div>
                    <div className="flex text-app-main-100">24/6/2022, 12:14:30</div>
                  </div>
                </div>
                <div className="flex bg-gradient px-6 py-6 cursor-pointer text-white rounded-3xl">This land has emitted 112.32 TCO2 and has a remaining of 112.32 TCO2 to sell.</div>
              </div>
            </div>
            <div className="text-app-dark-400 text-sm">Start</div>
            <div className="flex flex-col md:flex-row gap-4 lg:px-12 w-full">
              <button className="w-full flex items-center justify-center text-white rounded-2xl py-4 border border-main">Land Tokens available</button>
              <button className="w-full flex button-gradient items-center justify-center text-white rounded-2xl py-4" onClick={() => navigate('/pay')}>Let's Kolor Soon!</button>
            </div>
            <div className="flex flex-col w-full lg:flex-row gap-8 border border-main rounded-2xl px-4 md:px-8 lg:px-10 xl:px-12 py-12">
              <div className="flex flex-col w-full lg:w-1/2 gap-4 text-white">
                <div className="text-white py-6">See specie to see its details</div>
                <div className="flex flex-col md:flex-row items-center px-6 py-6 rounded-2xl bg-gradient">
                  <div className="flex w-full md:w-1/3">Lenga</div>
                  <div className="flex w-full md:w-1/3">Nothofagus Pumillio</div>
                  <div className="flex w-full md:w-1/3">12000 [m2]</div>
                </div>
                <div className="flex flex-col md:flex-row items-center px-6 py-6 rounded-2xl bg-body">
                  <div className="flex w-full md:w-1/3">Manio</div>
                  <div className="flex w-full md:w-1/3">Podocarpus Nebigenus</div>
                  <div className="flex w-full md:w-1/3">12000 [m2]</div>
                </div>
                <div className="flex flex-col md:flex-row items-center px-6 py-6 rounded-2xl bg-body">
                  <div className="flex w-full md:w-1/3">Cipres de la cordillera</div>
                  <div className="flex w-full md:w-1/3">Austrocedrus Chilensis</div>
                  <div className="flex w-full md:w-1/3">12000 [m2]</div>
                </div>
                <div className="flex flex-col md:flex-row items-center px-6 py-6 rounded-2xl bg-body">
                  <div className="flex w-full md:w-1/3">Coigue</div>
                  <div className="flex w-full md:w-1/3">Nothofagus Dombeyi</div>
                  <div className="flex w-full md:w-1/3">12000 [m2]</div>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-4">
                <div className="text-white py-8">Specie Info</div>
                <div className="flex gap-3">
                  <div className="text-white">Specie:</div>
                  <div className="text-app-main-100">Lenga</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">Scientific Name:</div>
                  <div className="text-app-main-100">Nothofagus Pumillio</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">Density:</div>
                  <div className="text-app-main-100">10%</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">TCO2 projected from specie per year:</div>
                  <div className="text-app-main-100">10.1735136</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">TCO2 offset per second:</div>
                  <div className="text-app-main-100">0.0000003226</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">Added on:</div>
                  <div className="text-app-main-100">24/6/2022, 12:14:40</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">Last update on:</div>
                  <div className="text-app-main-100">No updates yet...</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">TCO2 offset per second:</div>
                  <div className="text-app-main-100"></div>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">TCO2 sold from this land:</div>
                  <div className="text-app-main-100">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MarketDashboard;