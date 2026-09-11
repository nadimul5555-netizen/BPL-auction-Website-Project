
import React from 'react'
import { TiUser } from "react-icons/ti";
import { TiFlag } from "react-icons/ti";
import type { PlayerTypes } from '../../Type/PlayersType'

const AvailablePlayer = ({toUser}:PlayerTypes) => {
  return (
    <div className=' container mx-auto grid grid-cols-3'>
      {
        toUser.map((Players:PlayerTypes )=> {
           return(
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={Players.image}
      alt={Players.name} />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title ">
        <TiUser />
      {Players.name}
      
    </h2>
    <div className='flex justify-between text-gray-500'>
        <h2 className='flex m-2  '>
            <span className='mt-1'>< TiFlag /></span>
            {Players.country}
        </h2>
        <button className='btn bg-red-50'>{Players.role}</button>
    </div>
    <div className='divider'></div>
    <p>{Players.battingStyle}</p>
    <div className="card-actions justify-end">
      
      <div className="badge badge-outline">Choose Player</div>
    </div>
  </div>
</div>
           )
        })
      }
    </div>
  )
}

export default AvailablePlayer
