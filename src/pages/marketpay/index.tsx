import Layout from "../../layout";
import ProgressBar from "../../components/progressbar";
import SideBar from "../../components/sidebar";
import TreeSlider from "../../components/slider/TreeSlider";
import AnimalSlider from "../../components/slider/AnimalSlider";
import CostaMap from "../../assets/image/costa_map.png";
import OutlineWallet from "../../assets/image/outlined_wallet.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarketPay = () => {
  const responsive = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
    <Layout title="Marketplace">
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 min-h-screen w-full">
				<SideBar />
				<div className="flex flex-col xl:flex-row pt-48 w-full md:w-4/5 xl:w-5/6 gap-8 pb-16 pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-8 md:pl-0 lg:pr-8 xl:pr-16">
					<div className="flex flex-col w-full xl:w-1/2 gap-6">
						<img src={CostaMap} alt="costa_map" className="rounded-2xl" />
            <div className="flex flex-col gap-2">
              <span className="text-white">Price</span>
              <div className="flex flex-col gap-4 tiny:flex-row tiny:gap-0">
                <div className="text-white px-6 py-2 bg-common-gradient rounded-l-2xl text-sm">$2,000 USD</div>
                <button className="py-2 px-16 button-gradient text-white text-sm rounded-full">Pay!</button>
              </div>
            </div>
						<div className="flex flex-col gap-4 border border-main rounded-3xl py-4 px-6">
							<div className="flex gap-4">
								<img src={OutlineWallet} className="h-12 my-auto" alt="outline-wallet" />
								<div className="flex flex-col">
									<span className="text-white">Current balance in your wallet:</span>
									<span className="text-app-main-100 text-sm">$80,230 USD</span>
								</div>
							</div>
							<ProgressBar bgcolor="#00A78D" completed={75} />
						</div>
					</div>
					<div className="flex flex-col w-full xl:w-1/2 gap-6">
					  <div className="border border-main rounded-2xl px-4 py-6">
              <span className="text-app-main-100 text-md mr-3">64 acres</span>
              <span className="text-white">of untouched wild land in northern Patagonia, where deforestation reaches a 1% annual rate.</span>
            </div>
            <div className="gap-2 border border-main rounded-2xl px-4 py-6">
              <span className="text-white">Trees</span>
              <TreeSlider responsive={responsive} />
              <span className="text-white">Animals</span>
              <AnimalSlider responsive={responsive} />
            </div>
					</div>
				</div>
			</div>
    </Layout>
  )
}

export default MarketPay;