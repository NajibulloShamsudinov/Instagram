import React from 'react'

function Followers({user,img}) {
  return (
    <div className="flex items-center gap-[10px] my-[20px]">
        <img src={img}
          className="w-[50px] rounded-[30px]"  alt="" />
          <div>
          <h1 className="text-[15px]">{user}</h1>
          <h1 className="text-[12px] text-[grey]">Подписаны: asiaplus и 4</h1>
          </div>
          <h1 className="text-[14px] text-[blue] ml-[40px]">Подписаться</h1>
         </div>
  )
}

export default Followers