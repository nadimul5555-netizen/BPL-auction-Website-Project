

import type { PlayerTypes } from '../../Type/PlayersType'
import PlayersCard from './PlayersCard';
interface AvailablePlayerProps {
  toUser: PlayerTypes[];
     ammunt:number;
   setAmmunt:React.Dispatch<React.SetStateAction<number>>;
   selectedPlayers:PlayerTypes[];
   setSelectedPlayers:React.Dispatch<React.SetStateAction<PlayerTypes[]>>;

   
}

const AvailablePlayer = ({toUser,ammunt,setAmmunt,selectedPlayers,setSelectedPlayers}:AvailablePlayerProps) => {
  return (
    <div className=' container mx-auto grid grid-cols-3 gap-y-5'>
      {
        toUser.map((Players:PlayerTypes )=> <PlayersCard key={Players.id} Players={Players} ammunt={ammunt} setAmmunt={setAmmunt}  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayersCard>)
      }
    </div>
  )
}

export default AvailablePlayer
