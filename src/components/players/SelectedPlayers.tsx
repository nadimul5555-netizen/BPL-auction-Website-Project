

import type { PlayerTypes } from "../../Type/PlayersType";
import SelectedPlayersCard from "./SelectedPlayersCard";



export interface SelectedPlayersProps {
   
    selectedPlayers:PlayerTypes[];
  setSelectedPlayers:React.Dispatch<React.SetStateAction<PlayerTypes[]>>;
    ammunt:number;
   setAmmunt:React.Dispatch<React.SetStateAction<number>>;
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers,setAmmunt,ammunt }: SelectedPlayersProps) => {
  
    
    return (
        <div className=" container mx-auto my-5 py-5">
            {
                selectedPlayers.map((Player:PlayerTypes) => <SelectedPlayersCard  Player={Player}  selectedPlayers={ selectedPlayers} setSelectedPlayers={setSelectedPlayers} setAmmunt={setAmmunt} ammunt={ammunt}></SelectedPlayersCard> )
            }
        </div>
    )
}

export default SelectedPlayers;