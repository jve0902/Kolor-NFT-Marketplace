import { useState } from "react";
import Layout from "../../layout";
import ProgressBar from "../../components/progressbar";
import SideBar from "../../components/sidebar";
import { Modal } from "../../components/modal";
import Copy from "../../assets/icons/ico_copy.svg";
import Tick from "../../assets/icons/ico_tick.svg";
import CostaMap from "../../assets/image/costa_map.png";
import OutlineWallet from "../../assets/image/outlined_wallet.png"

const Wallet = () => {
	const [copied, setCopied] = useState(false);
	const [open, setOpen] = useState(false);

  const copyClipboard = () => {
    navigator.clipboard.writeText("0xc2b836e5326619caaee6cf16c772c2ec56f392b9");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

	return (
		<Layout title="Marketplace">
			<div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 min-h-screen w-full">
				<SideBar />
				<div className="flex flex-col xl:flex-row pt-48 w-full md:w-4/5 xl:w-5/6 gap-8 pb-16 pr-4 sm:pr-8 md:pr-12 pl-4 sm:pl-8 md:pl-0 lg:pr-8 xl:pr-16">
					<div className="flex flex-col w-full xl:w-2/3 gap-6">
						<img src={CostaMap} alt="costa_map" className="rounded-2xl" />
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
					<div className="flex flex-col w-full xl:w-1/3 gap-6">
						<span className="text-white">First thing first. You need to add cash to your Kolor wallet.</span>
						<div className="flex gap-6 border border-main rounded-2xl px-4 py-6">
							<div className="rounded-full border border-main text-app-main-100 h-11 w-11 items-center px-4 py-2">A</div>
							<div className="flex flex-col w-full">
								<div className="flex justify-between w-full">
									<span className="text-white text-sm">1 Acre</span>
									<span className="text-white text-sm">=$2,000USD</span>
								</div>
								<span className="text-app-red">*Make sure to add some extra cUSD for gas fee</span>
							</div>
						</div>
						<div className="flex flex-col px-6 py-6 gap-4 bg-grey rounded-3xl">
							<div className="flex w-full justify-between">
								<span className="text-white">Address</span>
								<button onClick={() => copyClipboard()}>
									{
										copied ?
										<img src={Tick} alt="tick" />
										:
										<img src={Copy} alt="copy" />
									}
								</button>
							</div>
							<p className="truncate text-white">0xc2b836e5326619caaee6cf16c772c2ec56f392b9</p>
						</div>
						<button className="text-white button-gradient px-6 py-2 rounded-3xl" onClick={() => setOpen(true)}>Done!</button>
					</div>
				</div>
			</div>
			{/* <Modal open={ open } onClose={ () => setOpen(false) } type='success' amount={5} /> */}
			<Modal open={ open } onClose={ () => setOpen(false) } type='error' amount={5} />
		</Layout>
	)
}

export default Wallet;