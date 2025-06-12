import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import useStore from '../store'


const Club = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const ismute = useStore((state)=>state.ismute)
  const audioRef = useRef<HTMLAudioElement[] | null[]>([])
  const [currentAudio, setcurrentAudio] = useState(0)
  const singleaudio = useRef<HTMLAudioElement>(null)
  const {scrollY} = useScroll({
    container: scrollContainerRef
  });

  useEffect(()=>{
    audioRef.current.forEach(audio=>{
      if(audio){
        audio.muted = !ismute
      }
    })
  },[ismute])

  useMotionValueEvent(scrollY,'change',(current)=>{
    console.log("current vlaue:",current)
    console.log("window height:",window.screen.height)
    const audioIndex = Math.floor(current/window.innerHeight)
    console.log("audioINdex:",audioIndex)
    setcurrentAudio(audioIndex)
    console.log("currentaudio:", currentAudio)
  })

  const audioRolls:string[] = [
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656058/welcomeTFC_gv5vlf.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656059/1rule_mxnslw.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656061/2rule_vs5rho.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656062/3rule_vywd8n.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656064/4rule_mozqfn.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656067/5rule_tusvdv.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656069/6rule_was5bl.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656070/7rule_vojug8.mp3',
    'https://res.cloudinary.com/df6rtyw66/video/upload/v1749656058/8rule_flemo1.mp3'
  ]

  useEffect(()=>{
    
    const playAduio:()=>void = async() => {
      const playableAudio = audioRef.current[currentAudio]
      audioRef.current.forEach((audio)=>{
        if(audio){
          if(audio == playableAudio){
            playableAudio.currentTime=0
            playableAudio?.play() 
          }else{
            audio.pause()
          }
        }
      })
    }

    playAduio()
  },[currentAudio])

  useEffect(()=>{
    const playAudio = async () => {
      if (singleaudio.current) {
        try {
          await singleaudio.current.play()
        } catch (error) {
          console.log("Autoplay blocked by browser:", error)
        }
      }
    }
    playAudio()
  },[])



  return (
    <div 
      ref={scrollContainerRef}
      className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'
      data-lenis-prevent>
      {audioRolls.map((src,idx)=> (
        <audio
          key={idx}
          src={src}
          ref= {el=> {audioRef.current[idx]=el}}
        />
      ))}

      <div className='h-screen snap-start relative font-bold font-barlow'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655296/welcome_xpcyaa.webp' alt="welcome" className='object-cover h-full w-full' />
        <motion.h1
          initial={{x:-800}} 
          animate={currentAudio==0? {x:0}:{x:-800}}
          transition={currentAudio==0?{duration:0.1, delay:0.7}:{}}
          className='absolute top-20 left-10 text-[8rem] '
        >GENTELMEN!
        </motion.h1>
        <motion.h1 
          initial={{x:-800}} 
          animate={currentAudio==0? {x:0}:{x:-800}} 
          transition={currentAudio==0?{duration:0.1,delay:2.7}:{}} 
          className='absolute top-45 left-10 text-[8rem]'
        >WELCOME
        </motion.h1>
        <motion.h1 
          initial={{x:-800}} 
          animate={currentAudio==0? {x:0}:{x:-800}}
          transition={currentAudio==0?{duration:0.1,delay:2.8}:{}} 
          className='absolute top-70 left-15 text-[8rem]'
        >TO
        </motion.h1>
        <motion.h1 
          initial={{opacity:0}} 
          animate={currentAudio ==0? {opacity:1}: {opacity:0}} 
          transition={currentAudio==0?{duration:0.01, delay:3 }:{}} 
          className='absolute bottom-0 left-10 text-[12rem] z-5 font-fightclub text-bloodRed'
        >FIGHT CLUB
        </motion.h1>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655638/welcomeMask_ra9v0i.webp' alt="welcomMusk" className='absolute top-0 object-cover h-full' />
      </div>

      <div className='h-screen relative snap-start font-barlow'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655301/1rule_snuiol.webp' alt="rule1" className='object-cover h-full w-full' />
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 1</h1>
        <div className=' absolute flex justify-end top-0 h-full w-full'>
          <div className=' text-end px-10 flex flex-col justify-center'>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:2.2}:{}}
            className='text-7xl font-bold'
          >YOU
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:2.43}:{}}
            className='text-7xl font-bold'
          >DO
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:2.57}:{}}
            className='text-7xl font-bold'
          >NOT
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:2.82}:{}}
            className='text-7xl font-bold'
          >TALK
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:3.11}:{}}
            className='text-7xl font-bold'
          >ABOUT
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==1? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==1?{duration:0.05 ,delay:3.46}:{}}
            className='text-9xl font-fightclub text-bloodRed'
          >FIGHT CLUB
          </motion.h1>
          </div>
        </div>
      </div>

      <div className='h-screen relative font-barlow snap-start'>
      <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 2</h1>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655300/2rule_dgyqa3.webp' alt="rule2" className='object-cover h-full w-full' />  
        <div className=' absolute flex justify-end top-0 h-full w-full'>
          <div className=' text-end px-10 flex flex-col justify-center'>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:2.82}:{}}
            className='text-7xl font-bold'
          >YOU
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:3.15}:{}}
            className='text-7xl font-bold'
          >DO
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:3.41}:{}}
            className='text-7xl font-bold'
          >NOT
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:4.1}:{}}
            className='text-7xl font-bold'
          >TALK
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:4.46}:{}}
            className='text-7xl font-bold'
          >ABOUT
          </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==2? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==2?{duration:0.05 ,delay:4.83}:{}}
            className='text-9xl font-fightclub text-bloodRed'
          >FIGHT CLUB
          </motion.h1>
          </div>
        </div>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655303/3rule_hg4dy5.webp' alt="rule3" className='object-cover h-full w-full' />
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 3</h1>
        <div className='absolute top-0 h-full w-full flex justify-between'>
          <div className='px-5 pt-40'>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==3?{duration:0.05 ,delay:2.1}:{}}
            className='text-7xl' >SOMEONE</motion.h1>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:2.2}:{}}
              className='text-7xl'>YELLS</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:2.4}:{}}
              className='text-7xl text-bloodRed'>STOP,</motion.h1>
            </div>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:3.2}:{}}
              className='text-7xl'>GOES</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:3.4}:{}}
              className='text-7xl  text-bloodRed'>LIMP,</motion.h1>
            </div>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:4.1}:{}}
              className='text-7xl'>TAPS</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:"blur(100px)"}}
              animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==3?{duration:0.05 ,delay:4.3}:{}}
              className='text-7xl text-bloodRed'>OUT,</motion.h1>
            </div>
          
          </div>
          <div className='flex gap-5 items-end px-10 py-10'>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==3?{duration:0.05 ,delay:5.3}:{}}
            className='text-7xl'>THE</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==3?{duration:0.05 ,delay:5.6}:{}}
            className='text-7xl font-fightclub text-bloodRed'>FIGHT </motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==3?{duration:0.05 ,delay:5.7}:{}}
            className='text-7xl'>IS</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==3? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==3?{duration:0.05 ,delay:5.9}:{}}
            className='text-7xl'>OVER.</motion.h1>
          </div>
        </div>
        
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655293/4rule_asqq8x.webp' alt="rule4" className='object-cover h-full w-full' />
        <div className=' absolute top-0 h-full w-full flex justify-end items-end'>
          <div className=' w-full h-1/2 flex gap-10 items-center justify-center'>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==4? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==4?{duration:0.05, delay:1.3}:{}}
            className='text-[5rem]'>ONLY</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==4? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==4?{duration:0.05, delay:1.5}:{}}
            className='text-[6rem] font-fightclub text-bloodRed'>TWO</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==4? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==4?{duration:0.05, delay:1.65}:{}}
            className=' text-[6rem] '>GUYS</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==4? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==4?{duration:0.05, delay:1.85}:{}}
            className='text-[6rem] '>TO A</motion.h1>
          <motion.h1
            initial={{opacity:0,filter:"blur(100px)"}}
            animate={currentAudio==4? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
            transition={currentAudio==4?{duration:0.05, delay:2.3}:{}}
            className=' text-[6rem] font-fightclub text-bloodRed'>FIGHT</motion.h1>
          </div>
        </div>
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 4</h1>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655297/5rule_dhyu8k.webp' alt="rule5" className='object-cover h-full w-full' />
        <div className=' absolute top-0 h-full w-full flex justify-end items-end'>
          <div className=' w-full h-1/2 flex gap-10 items-center justify-center'>
            <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:2.2}:{}}
              className='text-[6rem]'>ONE</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:2.4}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>FIGHT</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:2.65}:{}}
              className='text-[6rem]'>AT</motion.h1>
              <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:2.73}:{}}
              className='text-[6rem]'>A</motion.h1>
              <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:2.8}:{}}
              className='text-[6rem]'>TIME,</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(20px)"}}
              animate={currentAudio==5?{opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==5?{duration:0.05,delay:3.2}:{}}
              className='text-[6rem]'>FELLAS.</motion.h1>
          </div>
        </div>
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 5</h1>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655294/6rule_nw9i5y.webp' alt="rule6" className='object-cover h-full w-full' />
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 6</h1>
        <div className=' absolute top-0 h-full w-full flex justify-center items-center'>
          <div className='h-full flex items-center flex-col justify-center'>
            <div className='flex'>
            <motion.h1
              initial={{opacity:0, filter:"b;ur(50px)"}}
              animate={currentAudio==6? {opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==6? {duration:0.05,delay:1.5}:{}}
              className='text-[6rem]'>NO</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"b;ur(50px)"}}
              animate={currentAudio==6? {opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==6? {duration:0.05,delay:1.65}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>SHIRTS, </motion.h1>
            </div>
            <div className='flex'>
            <motion.h1
              initial={{opacity:0, filter:"b;ur(50px)"}}
              animate={currentAudio==6? {opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==6? {duration:0.05,delay:2.2}:{}}
              className='text-[6rem]'>NO</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"b;ur(50px)"}}
              animate={currentAudio==6? {opacity:1, filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==6? {duration:0.05,delay:2.4}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>SHOES. </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655298/7rule_zzwkkt.webp' alt="rule7" className='object-cover h-full w-full'/>  
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 7</h1>
        <div className='absolute flex justify-end flex-col top-0 h-full w-full'>
          <div className='flex flex-col justify-start px-5 py-5'>
            <div>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:1.5}:{}}
              className='text-8xl font-fightclub text-bloodRed'>FIGHTS </motion.h1>
            </div>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:1.85}:{}}
              className='text-8xl'>WILL</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:2.1}:{}}
              className='text-8xl'>GO</motion.h1>
            </div>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:2.4}:{}}
              className='text-8xl'>AS</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:2.6}:{}}
              className='text-8xl font-fightclub text-bloodRed'>LONG</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:2.8}:{}}
              className='text-8xl'>AS</motion.h1>
            </div>
            <div className='flex gap-5'>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:2.9}:{}}
              className='text-8xl'>THEY</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:3.15}:{}}
              className='text-8xl'>HAVE</motion.h1>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:3.45}:{}}
              className='text-8xl'>TO</motion.h1>
            </div>
          </div>
        </div> 
        
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold'>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655293/8rule_rl7da5.webp' alt="rule8" className='object-cover h-full w-full' />
        <div className=' absolute top-0 h-full w-full flex flex-col justify-end items-end'>
          <div className='w-full absolute top-80 flex gap-5 items-center justify-center'>
          <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:3.24}:{}}
              className='text-[6rem]'>IF</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:3.4}:{}}
              className='text-[6rem]'>THIS</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:3.63}:{}}
              className='text-[6rem]'>IS</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:3.76}:{}}
              className='text-[6rem]'>YOUR</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:3.92}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>FIRST</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:4.21}:{}}
              className='text-[6rem]'>NIGHT</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:4.47}:{}}
              className='text-[6rem]'>AT</motion.h1>
          </div>
          <div className='w-full flex gap-10 z-5 items-center justify-center'>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:4.6}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>FIGHT </motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:4.8}:{}}
              className='text-[6rem] font-fightclub text-bloodRed'>CLUB</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:7.1}:{}}
              className='text-[6rem]'>YOU </motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:7.2}:{}}
              className='text-[6rem]'>HAVE </motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:7.4}:{}}
              className='text-[6rem]'>TO</motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:7.6}:{}}
              className='text-[6rem] text-bloodRed font-fightclub'>FIGHT</motion.h1>
          </div>
        </div>
        <h1 className='absolute top-15 left-5 text-5xl font-tt text-neutral-600'>RULE 8</h1>
        <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749655638/8ruleMask_pvsg6e.webp' alt="rule8mask" className='absolute top-0 object-cover h-full' />
      </div>

    </div>
  )
}

export default Club
