import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {
  image: any;
  title: string;
  size: string;
  country: string;
  region: string;
  city: string;
  species: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const MarketplaceItem = ({image, title, size, country, region, city, species}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col px-6 py-6 gap-4 bg-body rounded-3xl">
        <div className="w-full">
          <Slider {...settings}>
            <img src={image} alt={title} />
            <img src={image} alt={title} />
            <img src={image} alt={title} />
          </Slider>
        </div>
        <div className="text-white text-sm">{title}</div>
        <div className="flex gap-3">
          <div className="text-white">Land Size(M2):</div>
          <div className="text-app-main-100">{size}</div>
        </div>
        <div className="flex gap-3">
          <div className="text-white">Country:</div>
          <div className="text-app-main-100">{country}</div>
        </div>
        <div className="flex gap-3">
          <div className="text-white">State of region:</div>
          <div className="text-app-main-100">{region}</div>
        </div>
        <div className="flex gap-3">
          <div className="text-white">City:</div>
          <div className="text-app-main-100">{city}</div>
        </div>
        <div className="flex gap-3">
          <div className="text-white">Species in this land:</div>
          <div className="text-app-main-100">{species}</div>
        </div>
        <button className="border border-main px-6 py-1 rounded-full text-white" onClick={() => navigate('/marketdashboard')}>Explore land</button>
      </div>
    </>
  )
}

export default MarketplaceItem;