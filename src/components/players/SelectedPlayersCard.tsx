import { TbTrash } from "react-icons/tb";
import type { PlayerTypes } from "../../Type/PlayersType";





export interface SelectedPlayersCardProps {
    
    Player: PlayerTypes;
      selectedPlayers:PlayerTypes[];
  setSelectedPlayers:React.Dispatch<React.SetStateAction<PlayerTypes[]>>;
    ammunt:number;
   setAmmunt:React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayersCard = ({ Player, selectedPlayers, setSelectedPlayers,setAmmunt,ammunt  }: SelectedPlayersCardProps) => {
      const handleDelete =(Players:PlayerTypes)=>{
        const newDeletedPlayers =selectedPlayers.filter(P=> P.id !== Players.id)
        setSelectedPlayers(newDeletedPlayers)
        
        setAmmunt(ammunt+Player.price)
    }
    
    
    return (
        <div>
              <div className="grid grid-cols-2 border border-gray-300 rounded-lg m-5">
                        <div className="flex">
                            <div className="p-5">
                                <img className="h-20 w-auto rounded-lg " src={Player.image}/>
                            </div>
                            <div className="grid items-center m-3">
                                <h2 className="font-bold text-2xl">{Player.name}</h2>
                                <h3>{Player.battingStyle}</h3>
                            </div>
                        </div>
                        <div onClick={()=>handleDelete(Player)} className="flex justify-end items-center m-5 text-2xl ">
                            < TbTrash />
                        </div>
                    </div>
        </div>
    )
}

export default SelectedPlayersCard;