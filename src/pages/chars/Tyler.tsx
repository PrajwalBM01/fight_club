import { motion } from "motion/react"
import { useEffect, useRef} from "react"
import useStore from "../../store"

const Tyler = () => {

  const ismute = useStore((state)=>state.ismute)
  const audioRef = useRef<HTMLAudioElement>(null)



  useEffect(()=>{
    if(audioRef.current){
      audioRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playvedio = async () =>{
      if(audioRef.current ){
        audioRef.current.volume= 0.25
        await audioRef.current.play()
      }
    }
    playvedio()
  },[])


  return (
    <div className='h-auto'>
      <audio src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/tyler/guerrillaRadio.mp3' ref={audioRef} loop></audio>
      <motion.div
        initial={{opacity:0, filter:"blur(10px)"}}
        animate={{opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.5, delay:0.2}}
        className='h-screen relative flex '>
        <div className='relative'>
          <div className='absolute  top-0 h-full w-full  bg-linear-to-r from-transparent from-55% to-black'></div>
          <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/tyler/tyler_image.webp' alt="tylerImage" className='h-screen' />
        </div>
          <div className='h-full w-1/2 flex flex-col gap-5 font-barlow  justify-center'>
            <div className="font-bold ">
              <h1 className='text-8xl '>TYLER DURDEN</h1>
              <h1 className='text-bloodRed text-3xl'>Brad Pitt</h1>
            </div>
            <div className=' text-neutral-500 text-xl'>
              <h1>A soap salesman, revolutionary, and the chaotic alter ego of the Narrator.</h1>
              <h1>Confident, rebellious, fearless, and free from society’s shackles.</h1>
              <h1>Occupation: film operator, soap maker, waiter </h1>
              <h1>Lives at: Paper Street</h1>
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default Tyler