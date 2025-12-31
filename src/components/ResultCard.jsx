import React from 'react'

const ResultCard = ({ item }) => {
  const maxLenght=16;
  return (
    <div className='w-[16vw] h-60 relative rounded border-2'>
      <a target="_blank" href={item.url} className='h-full'>
        {item.type == 'photo' ? <img className='h-full w-full object-cover object-center ' src={item.src} alt="" /> : ""}
        {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} alt="" /> : ""}
      </a>
      <div id='bottom' className=' flex justify-between items-center gap-2 w-full py-2 px-2 text-white absolute bottom-0'>
        <h2 className='text-sm font-semibold capitalize'>{item.title.substring(0,maxLenght)}</h2>
        <button className='bg-blue-400 text-white rounded px-3 font-medium cursor-pointer'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard