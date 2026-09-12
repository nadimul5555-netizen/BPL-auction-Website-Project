import { use, useState } from "react";
import type { PlayerTypes } from "../../Type/PlayersType";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    playerDataPromis:Promise<PlayerTypes[]>
   ammunt:number;
   setAmmunt:React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ playerDataPromis,ammunt,setAmmunt }: PlayersProps) => {
    const toUser = use(playerDataPromis)
    const [button,setButton] =useState<boolean>(true)
    const [selectedPlayers,setSelectedPlayers]=useState<PlayerTypes[]>([])
    
    
    const handleSelect = ()=>{
        setButton(!button)
    }
    return (
        <div>
            <div className="flex justify-between container mx-auto">
            <h2 className="my-5 font-bold">{`${button === true ? "Avilable Players": `Selected Players ${selectedPlayers.length}/6`}`}</h2>
            <div className="my-4 ">
                <button onClick={handleSelect} className={` ${button === true? "btn-success":'' }  btn rounded-r-none px-5 py-1.5 items-center rounded-tl-lg rounded-bl-lg text-black`}>Available</button>

                <button onClick={handleSelect} className={` ${button === false? "btn-success" : ''} px-5 py-1.5 rounded-l-none items-center rounded-tr-lg rounded-br-lg text-black btn`}>Selected{selectedPlayers.length}</button>
            </div>
        </div>
        <div>
            { button === true? (<AvailablePlayer toUser={toUser} ammunt={ammunt} setAmmunt={setAmmunt} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayer> ):( <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ammunt={ammunt} setAmmunt={setAmmunt}></SelectedPlayers>)}
        </div>
        </div>
    )
}

export default Players;