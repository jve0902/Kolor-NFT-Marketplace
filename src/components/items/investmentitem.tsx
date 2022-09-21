type Props = {
  title: string;
  image: any;
  detail: any;
}

const InvestmentItem = ({title, image, detail}: Props) => {
  return (
    <>
      <div className="flex">
        <div className="flex items-center pt-24 justify-center absolute">
          <img src={image} alt={title} className="w-24" />
        </div>
        <div className="flex flex-col bg-body rounded-3xl ml-12 pt-4">
          <div className="flex flex-col border-b border-app-dark-400 pl-20 pr-8 gap-4 pb-4">
            <div className="text-sm text-white text-investment">
              {title}
            </div>
            <div className="flex">
              <div className="flex w-1/2 text-white">Tokens bought:</div>
              <div className="flex flex-row-reverse w-1/2 text-app-dark-400">{detail.bought}</div>
            </div>
            <div className="flex">
              <div className="flex w-1/2 text-white">Token price (in cUSD):</div>
              <div className="flex flex-row-reverse w-1/2 text-app-dark-400">{detail.price}</div>
            </div>
            <div className="flex">
              <div className="flex w-1/2 text-white">Tokens paid:</div>
              <div className="flex flex-row-reverse w-1/2 text-app-dark-400">{detail.paid}</div>
            </div>
            <div className="flex">
              <div className="flex w-1/2 text-white">Date of purchase:</div>
              <div className="flex flex-row-reverse w-1/2 text-app-dark-400">{detail.date}</div>
            </div>
          </div>
          <div className="flex cursor-pointer text-app-dark-400 items-center justify-center py-3">Explore Land</div>
        </div>
      </div>
    </>
  )
}

export default InvestmentItem;