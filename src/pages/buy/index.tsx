import { useState } from "react";
import Layout from "../../layout";
import SideBar from "../../components/sidebar";
import Map from "../../assets/image/map.png";

const Buy = () => {
  const [value, setValue] = useState("1");

  const handleChanged = (e: any) => {
    setValue(e.target.value);
  }
  return (
    <>
      <Layout title="Buy">
        <div className="flex gap-8 lg:gap-12 xl:gap-16 bg-dashboard min-h-screen w-full">
          <SideBar />
          <div className="flex flex-col-reverse md:flex-row pt-48 w-full px-4 md:px-0 gap-6 xl:gap-8 pb-16">
            <div className="flex flex-col w-full md:w-1/2 xl:w-2/3 gap-12">
              <div className="flex flex-col border border-main rounded-3xl gap-4 px-4 py-4">
                <img src={Map} alt="map" className="w-96" />
                <div className="text-app-dark-400 text-sm">Land details</div>
                <div className="flex gap-4">
                  <div className="text-white">Land Owner:</div>
                  <div className="text-app-main-100">Sociedad Humboldt SPA</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">Land Owner Address:</div>
                  <div className="text-app-main-100 truncate">0xF600c24AdC748AA5B42b94A9D39053299ffEA2f2</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">Country:</div>
                  <div className="text-app-main-100">Chile</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">State of region:</div>
                  <div className="text-app-main-100">Aysen</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">City:</div>
                  <div className="text-app-main-100">Comuna Lago Verde</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">Size (m2):</div>
                  <div className="text-app-main-100">120000</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">Estimated Initial TCO2 projected per year:</div>
                  <div className="text-app-main-100">448</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">Estimated Current TCO2 projected per year:</div>
                  <div className="text-app-main-100">448</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">TCO2 sold from this land:</div>
                  <div className="text-app-main-100">0</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-white">This land was created on:</div>
                  <div className="text-app-main-100">24/6/2022, 12:14:30</div>
                </div>
              </div>
              <div className="flex flex-col bg-contact py-24 px-6 xl:px-12 gap-6 rounded-4xl">
                <div className="text-white text-sm">Looing to invest?</div>
                <div className="text-white">Sign in now and start protecting Patagonia!</div>
                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-6">
                  <input type="text" placeholder="Email Address" className="w-full sm:w-2/3 md:w-full xl:w-2/3 input-contact py-4 px-4 rounded-3xl" />
                  <button className="bg-white rounded-3xl px-8 py-4">Suscribe</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 gap-6 pr-8 xl:pr-12">
              <div className="text-sm text-white">Be part of this land too!</div>
              <div className="text-app-dark-400">This land had an initial offering of 12000 land tokens. Currently there's a total of 11995/12000 tokens available.</div>
              <div className="flex flex-col py-4 gap-4 items-center justify-center">
                  <div className="flex gap-4 h-10">
                    <div className="flex justify-center items-center cursor-pointer border border-main rounded-lg text-white px-4 h-10">Buy</div>
                    <div className="flex justify-center w-full bg-gradient rounded-lg h-10">
                      <input type="text" value={value} className="w-full items-center input-value" onChange={(e) => handleChanged(e)} />
                    </div>
                  </div>
                  <div className="text-app-dark-400">Land token at a price of</div>
                  <div className="text-white">{value} $cUSD</div>
                  <button className="border border-main rounded-full w-3/4 text-white py-2">There are 1 holders already!</button>
                  <div className="text-app-dark-400">Looks like you're early. Get your land tokens now and join other 1 holders!</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Buy;