import { use } from "react";
import type { PlayerTypes } from "../../Type/PlayersType";
import AvailablePlayer from "./AvailablePlayer";

export interface PlayersProps {
    playerDataPromis:Promise<PlayerTypes[]>
}

const Players = ({ playerDataPromis }: PlayersProps) => {
    const toUser = use(playerDataPromis)
    
    return (
        <div>
            <div className="flex justify-between container mx-auto">
            <h2 className="my-5">Available Players</h2>
            <div className="my-4 ">
                <button className="btn bg-amber-500 px-5 py-1.5 items-center rounded-tl-lg rounded-bl-lg text-black">Available</button>

                <button className="  px-5 py-1.5 items-center rounded-tr-lg rounded-br-lg text-black btn">Selected</button>
            </div>
        </div>
        <div>
            <AvailablePlayer toUser={toUser}></AvailablePlayer>
        </div>
        </div>
    )
}

export default Players;