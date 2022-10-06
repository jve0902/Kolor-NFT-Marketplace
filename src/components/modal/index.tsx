import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./modal.css";

type Props = {
  type: string;
  open: boolean;
  onClose: any;
  amount: number;
}

export const Modal = ({ type, open, onClose, amount }: Props) => {
  const navigate = useNavigate();
  if (!open) {
    return null;
  }
  return (
    <div className={`modal text-app-gray-200`} onClick={onClose}>
      <div className={`small-modal ${type === 'success' ? 'bg-gradient' : 'bg-error'} absolute bottom-0 top-1/2 px-6 lg:px-12 py-6 transform -translate-y-1/2 left-1/2 -translate-x-1/2 pb-6 md:rounded-md overflow-hidden w-11/12 md:w-2/3 lg:w-2/4 xl:w-1/3 h-64 rounded-2xl`} onClick={e => e.stopPropagation()}>
        <div className="overflow-y-auto flex flex-col gap-4 justify-center items-center pt-8 xl:pt-14 w-full">
          <span className="flex text-white justify-center">
            {
              type === 'success' ?
              `SUCESS! You are now protecting ${amount.toString()} acres in Patagonia!`
              :
              `ERROR! Not enough funds to protect ${amount.toString()} acres in Patagonia!`
            }
          </span>
          <span className="text-white">
            {
              type === 'success' ?
              'Take look!'
              :
              'Add more cash'
            }
          </span>
          {
            type === 'success' ?
            <button className="rounded-2xl bg-white py-2 px-12" onClick={() => { onClose(false); navigate('/dashboard'); }}>Dashboard</button>
            :
            <button className="rounded-2xl bg-white py-2 px-12" onClick={() => { onClose(false); navigate('/wallet'); }}>Wallet</button>
          }
        </div>
      </div>
    </div>
  );
};