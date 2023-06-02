import React from 'react'
import FoodItem from './FoodItem'
import { useState } from "react"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TbArrowBigDownFilled } from "react-icons/tb"
function MenuList({ data, query, id }) {
    const [collapse, setCollapse] = useState(false)
    const [parent, enableAnimations] = useAutoAnimate()
    const filteredItems = data.items.filter(f => f.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    return (
        filteredItems.length !== 0 &&
        <div id={id} ref={parent} className="px-5 flex flex-col items-center gap-2.5">
            <button className='text-center' onClick={() => setCollapse(prev => !prev)}>
                <div className='flex justify-center items-center gap-2'>
                    <h1 className='text-3xl font-medium font-[Caveat]'>{data.title}</h1>
                    <TbArrowBigDownFilled
                        className='text-[#b59846]'>
                        asd
                    </TbArrowBigDownFilled>
                </div>
                <p className='text-md text-sm'>{data.description}</p>
            </button>
            {collapse &&
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5'>
                    {filteredItems.map((item, i) => (
                        <FoodItem key={i} data={item} />
                    ))}
                </div>
            }
        </div>
    )
}

export default MenuList