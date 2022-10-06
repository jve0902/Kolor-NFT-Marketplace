import Slider from "react-slick";
import { treeList } from "./treelist";
import SliderItem from "../items/slideritem";

type Props = {
  responsive: any;
}

const TreeSlider = ({ responsive }: Props) => {
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    responsive: responsive
  };

  return(
    <div className="px-6">
      <Slider {...settings}>
        {treeList.map((tree: any, index: any) => (
          <SliderItem image={tree.image} name={tree.name} title={tree.title} key={index} />
        ))}
      </Slider>
    </div>
  )
}

export default TreeSlider;