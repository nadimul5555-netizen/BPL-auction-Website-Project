


import type { PlayerTypes } from "./Type/PlayersType"
import Nav from "./components/Nav"
import Banner from "./components/banner"
import Players from "./components/players/Players"
import { Suspense } from "react"


const playerData = async():Promise<PlayerTypes[]> =>{
  const res = await fetch('/public/data.json')
  const data = await res.json();
  return data;
}
function App() {
  const playerDataPromis =playerData()

  return (
    <>
     <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loadding...</p>}>

      <Players playerDataPromis={playerDataPromis}></Players>
      </Suspense>
     
    </>
  )
}

export default App
