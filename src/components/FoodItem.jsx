import { useState } from "react"
import { formatMoney } from "../utils/formatMoney"
import Modal from "./Modal"

function FoodItem({ data }) {
    const [modal, setModal] = useState()
    return (
        <>
            {modal && <Modal data={modal} setModal={setModal} />}
            <div
                onClick={() => setModal(data)}
                className='cursor-pointer flex flex-row md:flex-col w-80 shadow-lg rounded-md bg-zinc-100 hover:scale-95 transition-all'>
                <div className="flex-shrink-0">
                    <img src={data.image} alt="" className='h-24 w-36 md:h-60 md:w-full rounded-t-md' />
                </div>
                <div className='w-full flex flex-col justify-center text-center p-2.5'>
                    <h3 className="text-sm">{data.name}</h3>
                    {Array.isArray(data.price) ?
                        data.price.map((m, i) => (
                            <p key={i} className="text-green-500 font-medium">{formatMoney(m.price)} <span className="text-rose-500 font-light">({m.type})</span></p>
                        ))
                        :
                        <p className="text-green-500 font-medium">{formatMoney(data.price)}</p>
                    }
                </div>
            </div>
        </>
    )
}

export default FoodItem