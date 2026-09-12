import { TiFlag, TiUser } from "react-icons/ti";
import type { PlayerTypes } from "../../Type/PlayersType";

import { toast } from 'react-toastify'

export interface PlayersCardProps {
  Players: PlayerTypes
  ammunt: number;
  setAmmunt: React.Dispatch<React.SetStateAction<number>>
  selectedPlayers: PlayerTypes[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<PlayerTypes[]>>;

}



const PlayersCard = ({ Players, ammunt, setAmmunt, selectedPlayers, setSelectedPlayers }: PlayersCardProps) => {

  const choose = selectedPlayers.some(player => player.id === Players.id)
  const handleChoose = () => {

    if (ammunt >= Players.price) {
      setSelectedPlayers([...selectedPlayers, Players])
    }
    

    const setNewAmmunt = (ammunt - Players.price)
    if (setNewAmmunt >= 0) {
      setAmmunt(setNewAmmunt)
      toast.success(`You have bey ${Players.name}. Successfully!`)
    } else {
      toast.error("Your ammunt is low")
    }
  }




  return (
    <div className="card bg-base-100 m-3  shadow-sm">
      <figure>
        <img
          src={Players.image}
          alt={Players.name} />
      </figure>
      <div className="card-body">
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
        <h2 className='font-semibold'>Rating</h2>
        <h2 className='font-semibold text-gray-500'>{Players.battingStyle}</h2>
        <div className="card-actions justify-between">
          <h2 className='font-bold text-2xl'>Price:${Players.price}</h2>
          <button onClick={handleChoose} className="btn btn-soft hover:scale-105" disabled={choose === true ? true : false}>{choose === true ? "Selected" : "Choose Player"}</button>
        </div>
      </div>
    </div>
  )
}

export default PlayersCard;