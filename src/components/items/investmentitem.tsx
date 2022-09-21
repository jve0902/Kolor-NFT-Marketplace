import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  image: any;
  detail: any;
}

const InvestmentItem = ({title, image, detail}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:flex items-center pt-24 justify-center absolute">
          <img src={image} alt={title} className="w-24" />
        </div>
        <div className="flex flex-col bg-body rounded-3xl ml-0 sm:ml-12 pt-4">
          <div className="flex sm:hidden items-center justify-center">
            <img src={image} alt={title} className="w-24" />
          </div>
          <div className="flex flex-col border-b border-app-dark-400 pl-4 sm:pl-20 pr-8 gap-4 pb-4">
            <div className="text-sm text-white text-investment">
              {title}
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex w-full md:w-1/2 text-white">Tokens bought:</div>
              <div className="flex md:flex-row-reverse w-full md:w-1/2 text-app-dark-400">{detail.bought}</div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex w-full md:w-1/2 text-white">Token price (in cUSD):</div>
              <div className="flex md:flex-row-reverse w-full md:w-1/2 text-app-dark-400">{detail.price}</div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex w-1/2 text-white">Tokens paid:</div>
              <div className="flex md:flex-row-reverse w-full md:w-1/2 text-app-dark-400">{detail.paid}</div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex w-1/2 text-white">Date of purchase:</div>
              <div className="flex md:flex-row-reverse w-full md:w-1/2 text-app-dark-400">{detail.date}</div>
            </div>
          </div>
          <div className="flex cursor-pointer text-app-dark-400 items-center justify-center py-3" onClick={ () => navigate('/buy') }>Explore Land</div>
        </div>
      </div>
    </>
  )
}

export default InvestmentItem;