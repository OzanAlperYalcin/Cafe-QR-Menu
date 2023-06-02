import React from 'react'

function CategoryItem({ data }) {
    return (
        <a
            href={`#${data.name}`}
            className='cursor-pointer flex-shrink-0 shadow-lg hover:scale-95 transition-all'>
            <div className='relative h-60 w-80 md:w-96'>
                <img src={data.image} alt="" className='h-full w-full rounded-md' />
                <div className='absolute w-full h-20 bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent to-black flex justify-center rounded-b-md'>
                    <h3 className="mt-auto bg-white/20 text-white font-medium text-sm mb-3 p-2 rounded-full">{data.name}</h3>
                </div>
            </div>
        </a>
    )
}

export default CategoryItem