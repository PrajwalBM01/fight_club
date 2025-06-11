import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Navcomp from "./components/Navcomp"
import { Route, Routes } from "react-router-dom"
import Story from "./pages/Story"
import Characters from "./pages/Characters"
import Club from "./pages/Club"
import Whome from "./pages/Whome"
import Tyler from "./pages/chars/Tyler"
import Narrator from "./pages/chars/Narrator"
import Marla from "./pages/chars/Marla"
import { IconDeviceDesktop } from "@tabler/icons-react"


const App = () => {
  const [isopen, setisopen] = useState(false)
  const [Showpopup, setShowpopup] = useState(false)
  
  useEffect(()=>{
    const checkScreensize = () =>{
      setShowpopup(window.innerWidth<640)
    }

    checkScreensize();

    window.addEventListener('resize',checkScreensize)

    return () => window.removeEventListener('resize',checkScreensize)
  },[])

  if(Showpopup){
    return(
      <div className=" h-screen w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-50 w-full px-5 gap-2 ">
          <IconDeviceDesktop size={50} stroke={1}/>
          <h1 className="text-bloodRed font-barlow font-bold">BEST EXPRIENCE ON LARGER SCREEN </h1>
          <p className="w-80 text-center font-barlow">This webiste is optimised for bigger screen. Please open it in a PC/Tablet for best exprience, Thank you.</p>
        </div>
      </div>
    )
  }

  return (
      <div className="h-auto relative">
        <Navbar 
          isopen={isopen} 
          setisopen={setisopen} 
        />
        <Navcomp isopen={isopen} setisopen={setisopen} />
      <main>
        <Routes>
          <Route path="/" element={<Story/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/tylerdurden" element={<Tyler/>}/>
          <Route path="/narrator" element={<Narrator/>}/>
          <Route path="/marlasinger" element={<Marla/>}/>
          <Route path="/club" element={<Club/>}/>
          <Route path="/whoami" element={<Whome/>}/>
        </Routes>
      </main>
      </div>
  )
}

export default App