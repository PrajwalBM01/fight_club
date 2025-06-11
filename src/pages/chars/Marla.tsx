import  { useEffect, useRef } from 'react'
import useStore from '../../store'
import { motion } from 'motion/react'


const Marla = () => {
  const ismute = useStore((state)=>state.ismute)
  const audioRef = useRef<HTMLAudioElement>(null)


  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playaudio = async () =>{
      if(audioRef.current ){
        audioRef.current.volume = 0.25
        await audioRef.current.play()
      }
    }
    playaudio()
  },[])


  return (
    
    <div className='h-auto'>
      <audio 
        src='https://res.cloudinary.com/df6rtyw66/video/upload/v1749657066/sweetDreams_imcilk.mp3'
        ref={audioRef}
        loop>

      </audio>
      <motion.div
        initial={{opacity:0, filter:"blur(10px)"}}
        animate={{opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.5, delay:0.2}}
        className='h-screen relative flex justify-start items-start'>
        <div className='relative'>
          <div className='absolute  top-0 h-full w-full  bg-linear-to-r from-transparent from-70% to-black'></div>
          <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749656927/marla_image_vd8nos.webp' alt="" className='h-screen' />
        </div>
          <div className='h-full w-1/2 flex flex-col gap-5 font-barlow  justify-center'>
            <div className='font-bold'>
              <h1 className='text-8xl '>MARLA SINGER</h1>
              <h1 className='text-bloodRed text-3xl'>Helena Bonham Carter</h1>
            </div>
            <div className='font-barlow text-neutral-500 text-xl'>
              <h1>A chain-smoking, thrift store-dressed woman.</h1>
              <h1>Crashes support groups and drifts through life with no clear purpose.</h1>
              <h1>Occupation: none</h1>
              <h1>Lives at: rundown apartment #14</h1>
            </div>
        </div>
        <img
          src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749656929/marla_number_nxrcn9.webp' 
          alt="number" 
          className='absolute h-40 top-0 right-0' />
      </motion.div>
    </div>
  )
}

export default Marla