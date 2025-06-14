
import { motion } from "motion/react"
import { useEffect, useRef } from "react"
import useStore from "../../store"

const Narrator = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const ismute = useStore((state)=>state.ismute)


  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playvedio = async () =>{
      if(audioRef.current ){
        audioRef.current.volume = 0.25
        await audioRef.current.play()
      }
    }
    playvedio()
  },[])

  return (
    <div className='h-auto'>
      <audio 
        ref={audioRef}
        src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/narrator/brokenDreams.mp3'
        loop></audio>
      <motion.div 
        initial={{opacity:0, filter:"blur(10px)"}}
        animate={{opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.5, delay:0.2}}
        className='h-screen relative flex justify-start items-start'>
        <div className='relative'>
          <div className='absolute  top-0 h-full w-full  bg-linear-to-r from-transparent from-50% to-black'></div>
          <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/narrator/narratoe_image.webp' alt="narratoeImage" className='h-screen' />
        </div>
          <div className='h-full w-1/2 flex flex-col gap-5 font-barlow justify-center'>
            <div className="font-bold">
            <h1 className='text-8xl '>NARRATOR</h1>
            <h1 className='text-bloodRed text-3xl'>Edward Norton</h1>
            </div>
            <div className='text-neutral-500 text-xl'>
            <h1>A nameless white-collar worker stuck in the monotony of modern life.</h1>
            <h1>Lonely, insomniac, and emotionally disconnected.</h1>
            <h1>Occupation: car recall coordinator </h1>
            <h1>Lives at: Paper Street (before his condo unit became ashes)</h1>
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default Narrator