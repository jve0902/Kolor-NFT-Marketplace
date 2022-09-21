import Layout from "../../layout"
import MarketplaceItem from "../../components/items/marketplaceitem";
import { marketplaceList } from "./marketplace";
import SideBar from "../../components/sidebar";
import Video from "../../assets/image/video.png";

const Marketplace = () => {
  return (
    <>
      <Layout title="Marketplace">
        <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 bg-dashboard min-h-screen w-full">
          <SideBar />
          <div className="flex flex-col pt-48 w-full gap-8 pb-16 pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-8 md:pl-12 lg:pr-8 xl:pr-16">
            <div className="flex flex-col xl:flex-row gap-8 w-full min-h-1/2 xl:h-72">
              <div className="flex flex-col gap-6 bg-marketplace px-12 py-12 w-full xl:w-2/3 rounded-4xl lg:mb-2 xl:mb-0">
                <div className="text-white">The Largest Lands Marketplace</div>
                <div className="text-white text-md">Available Lands</div>
              </div>
              <img src={Video} alt="video" className="xl:w-1/3" />
            </div>
            <div className="flex text-white">Featured Lands</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
              {
                marketplaceList.map((marketplace, idx) => (
                  <MarketplaceItem key={idx} image={marketplace.image} title={marketplace.title} size={marketplace.size} country={marketplace.country} region={marketplace.state} city={marketplace.city} species={marketplace.species} /> 
                ))
              }
            </div>
          </div>
        </div>   
      </Layout>
    </>
  )
}

export default Marketplace