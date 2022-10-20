import TreeSlider from "../../components/slider/TreeSlider";
import AnimalSlider from "../../components/slider/AnimalSlider";
import Layout from "../../layout"
import MarketplaceItem from "../../components/items/marketplaceitem";
import { marketplaceList } from "./marketplace";
import SideBar from "../../components/sidebar";
import Video from "../../assets/image/video.png";
import Map from "../../assets/image/map.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marketplace = () => {
  const responsive = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <>
      <Layout title="Marketplace">
        <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 min-h-screen w-full">
          <SideBar />
          <div className="flex flex-col pt-48 w-full md:w-4/5 xl:w-5/6 gap-8 pb-16 pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-8 md:pl-0 lg:pr-8 xl:pr-16">
            <div className="flex flex-col xl:flex-row gap-8 w-full min-h-1/2 xl:h-72">
              <div className="flex flex-col gap-6 bg-marketplace px-12 py-12 w-full xl:w-2/3 rounded-4xl lg:mb-2 xl:mb-0">
                <div className="text-white">The Largest Lands Marketplace</div>
                <div className="text-white text-md">Available Lands</div>
              </div>
              <img src={Video} alt="video" className="w-full xl:w-1/3" />
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col gap-4 w-full lg:w-1/3">
                <span className="text-white">Featured Lands</span>
                <MarketplaceItem
                  image={Map}
                  title="Ignacio Garafoulich's Land"
                  size="1200000"
                  country="Chile"
                  region="Aysen"
                  city="Comuna Lago Verde"
                  species="4"
                />
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-2/3">
                <span className="text-white">Featured Lands</span>
                <div className="flex flex-col bg-benefit py-8 px-2 md:px-4 lg:px-8 rounded-2xl gap-8">
                  <div className="flex flex-col">
                    <span className="text-white text-md text-gradient">Purchase today... Conserve for the future!</span>
                    <span className="text-sm text-slate-300">Become a patagonian landowner and look forward to:</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex border border-main rounded-3xl px-2 md:px-4 lg:px-8 py-6 gap-2 md:gap-4 lg:gap-8">
                      <div className="rounded-full bg-gradient text-white px-2 h-6">
                        1
                      </div>
                      <span className="text-white">Ensure land conservation for 30 days.</span>
                    </div>
                    <div className="flex border border-main rounded-3xl px-2 md:px-4 lg:px-8 py-6 gap-2 md:gap-4 lg:gap-8">
                      <div className="rounded-full bg-gradient text-white px-2 h-6">
                        2
                      </div>
                      <span className="text-white">Protect and monitor some of the whildest trees and animals in Patagonia!</span>
                    </div>
                  </div>
                  <span className="text-white">Trees</span>
                  <TreeSlider responsive={responsive} />
                  <span className="text-white">Animals</span>
                  <AnimalSlider responsive={responsive} />
                  <div className="flex flex-col gap-3">
                    <div className="flex w-full gap-2 md:gap-4 lg:gap-8 border border-main rounded-3xl px-2 md:px-4 lg:px-8 py-6">
                      <div className="flex flex-col rounded-full bg-gradient text-white px-2 h-6">
                        3
                      </div>
                      <span className="text-white">Future carbon credit yields</span>
                    </div>
                    <div className="flex w-full gap-2 md:gap-4 lg:gap-8 border border-main rounded-3xl px-2 md:px-4 lg:px-8 py-6">
                      <div className="rounded-full bg-gradient text-white px-2 h-6">
                        4
                      </div>
                      <span className="text-white">Transparent legal ownership registries.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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