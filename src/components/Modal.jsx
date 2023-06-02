import { FaTimes } from "react-icons/fa"
import { formatMoney } from "../utils/formatMoney"

function Modal({ data, setModal }) {
    return (
        <div onClick={() => setModal()} className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='bg-white rounded-md border border-zinc-100 shadow-md grid justify-center items-center w-3/4 md:w-auto max-h-3/4 relative'>
                <button
                    onClick={() => setModal()}
                    className="absolute -right-3 -top-3 bg-red-500 p-1.5 rounded-full hover:rotate-180 duration-500 transition-all">
                    <FaTimes className="text-white" />
                </button>
                <div className="flex justify-center">
                    <img src={data.image} alt="" className='max-h-96' />
                </div>
                <div className="p-5 grid gap-2.5">
                    <header className="text-center">
                        <h1 className="text-xl">{data.name}</h1>
                        {Array.isArray(data.price) ?
                        data.price.map((m, i) => (
                            <p key={i} className="text-green-500 font-medium">{formatMoney(m.price)} <span className="text-rose-500 font-light">({m.type})</span></p>
                        ))
                        :
                        <p className="text-green-500 font-medium">{formatMoney(data.price)}</p>
                    }
                    </header>
                    {data.description &&
                    <div className="text-sm">
                        <p className="font-medium">AÇIKLAMA</p>
                        <p>{data.description}</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal