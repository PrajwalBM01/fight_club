import { useEffect, useRef, useState, } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store'



const Characters = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const setischaropen = useStore((state)=>state.setischaropen)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [loaded, setloaded] = useState(false)   
  const navigate = useNavigate();

  useEffect(()=>{
    const checkVediosStatus = ()=>{
      const allLoaded = videoRefs.current.every(video=> 
        video && video.readyState >= 3
      );
      if(allLoaded){
        setloaded(true)
      }
    }

    checkVediosStatus();

    videoRefs.current.forEach(video=>{
      if(video){
        video.addEventListener('loadeddata',checkVediosStatus)
      }
    });

    return()=>{
      videoRefs.current.forEach(video=>{
        if(video){
          video.removeEventListener('loadeddata',checkVediosStatus)
        }
      })
    }
  },[])
  
  interface charType {
    id:number,
    name:string,
    actor:string,
    track:string,
    nav:string
  }

  const chars:charType[] = [
    {
      id:1,
      name:"Narrator",
      actor:"Edward Norton",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/narrator/char_narrator.mp4',
      nav:"/narrator"
    },
    {
      id:2,
      name:"Tyler durden",
      actor:"Brad Pitt",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/tyler/char_tyler.mp4',
      nav:"/tylerdurden"
    },
    {
      id:3,
      name:"Marla singer",
      actor:"Helena Bonham Carter",
      track:'https://d3qw2mvgwe85u8.cloudfront.net/uploads/char-page/marla/char_marla.mp4',
      nav:"/marlasinger"
    }
  ]


  return (
    <motion.div
      initial={{
        y:50,
        opacity:0,
        filter:"blur(20px)"
      }}
      animate={{
        y:0,
        opacity: loaded? 1 : 0,
        filter:loaded? "blur(0px)" : "blur(20px)"
      }}
      transition={{duration:0.8, ease:'easeOut'} }
      className='h-screen'>
      <div className='flex gap-2 h-full w-full pt-15 pb-10 px-5'>
        {chars.map((char,idx)=>(
          <motion.div
            key={idx}
            className={`group relative flex items-center justify-center ${!(hovered == idx) && 'grayscale' } rounded-lg overflow-hidden hover:cursor-pointer`}
            onMouseEnter={() => {
              setHovered(idx)
              videoRefs.current[idx]?.play()
            }}
            onMouseLeave={() => {
              setHovered(null)
              videoRefs.current[idx]?.pause()
            }}
            animate={{
              flexBasis: hovered === idx ? "150%" : "100%",
              transition: { duration: 0.4, type: "spring" }
            }}
            onClick={()=> {
              setischaropen()
              navigate(char.nav)
            }}
          >
          <video
            src={char.track}
            loop
            muted
            ref={(el) => { videoRefs.current[idx] = el }}
            className={`w-full h-full object-cover ${char.id==3 && "object-[45%]"}`}
          />
          <motion.div 
            animate={hovered===idx? {y:0} : {y:"100%"} }
            transition={{duration:0.2}}
            className='absolute font-fightclub text-bloodRed md:text-4xl lg:text-6xl bottom-0'>{char.name}
          </motion.div>
        </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Characters