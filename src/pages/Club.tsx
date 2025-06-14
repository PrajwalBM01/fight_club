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
    const audioIndex = Math.floor(current/window.innerHeight)
    setcurrentAudio(audioIndex)
  })

  const audioRolls:string[] = [
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/welcomeTFC.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/1rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/2rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/3rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/4rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/5rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/6rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/7rule.mp3',
    'https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/8rule.mp3'
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
    <motion.div
    initial={{
      opacity:0,
      filter:"blur(20px)"
    }}
    animate={{
      opacity:1,
      filter:"blur(0px)"
    }}
    transition={{duration:0.8, ease:'easeOut', delay:0.4} }
      ref={scrollContainerRef}
      className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'
      data-lenis-prevent>
      <h1 className='top-15 px-5 text-5xl font-tt text-neutral-600 sticky z-10'>{currentAudio==0? '': `RULE ${currentAudio}`}</h1>
      {audioRolls.map((src,idx)=> (
        <audio
          key={idx}
          src={src}
          ref= {el=> {audioRef.current[idx]=el}}
        />
      ))}

      <div className='h-screen snap-start relative font-bold font-barlow flex items-center '>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/welcome.webp' alt="welcome" className='object-cover' />
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
          className='absolute bottom-0 left-10 text-[12rem] z-5 font-fightclub font-thin text-bloodRed'
        >FIGHT CLUB
        </motion.h1>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/welcomeMask.webp' alt="welcomMusk" className='absolute' />
      </div>

      <div className='h-screen relative snap-start font-barlow flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/1rule.webp' alt="rule1" className='object-cover' />
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

      <div className='h-screen relative font-barlow snap-start flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/2rule.webp' alt="rule2" className='object-cover' />  
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

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/3rule.webp' alt="rule3" className='object-cover' />
        <div className='absolute top-0 h-full w-full flex justify-between'>
          <div className='px-5 flex flex-col justify-center'>
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
            className='text-7xl font-fightclub text-bloodRed font-thin'>FIGHT </motion.h1>
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

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/4rule.webp' alt="rule4" className='object-cover' />
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
            className='text-[6rem] font-fightclub text-bloodRed font-thin'>TWO</motion.h1>
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
            className=' text-[6rem] font-fightclub text-bloodRed font-thin'>FIGHT</motion.h1>
          </div>
        </div>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/5rule.webp' alt="rule5" className='object-cover' />
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
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>FIGHT</motion.h1>
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
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
      <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/6rule.webp' alt="rule7" className='object-cover w-full'/>
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
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>SHIRTS, </motion.h1>
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
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>SHOES. </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/7rule.webp' alt="rule7" className='object-cover'/>  
        <div className='absolute flex justify-end flex-col top-0 h-full w-full'>
          <div className='flex flex-col justify-start px-5 py-5'>
            <div>
            <motion.h1
              initial={{opacity:0,filter:'blur(100px)'}}
              animate={currentAudio==7? {opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==7? {duration:0.05,delay:1.5}:{}}
              className='text-8xl font-fightclub text-bloodRed font-thin'>FIGHTS </motion.h1>
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
              className='text-8xl font-fightclub text-bloodRed font-thin'>LONG</motion.h1>
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

      <div className='h-screen relative snap-start font-barlow font-bold flex items-center'>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/8rule.webp' alt="rule8" className='object-cover' />
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
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>FIRST</motion.h1>
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
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>FIGHT </motion.h1>
            <motion.h1
              initial={{opacity:0, filter:"blur(100px)"}}
              animate={currentAudio==8?{opacity:1,filter:"blur(0px)"}:{opacity:0}}
              transition={currentAudio==8?{duration:0.05,delay:4.8}:{}}
              className='text-[6rem] font-fightclub text-bloodRed font-thin'>CLUB</motion.h1>
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
              className='text-[6rem] text-bloodRed font-fightclub font-thin'>FIGHT</motion.h1>
          </div>
        </div>
        <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/rules/8ruleMask.webp' alt="rule8mask" className='absolute object-cover' />
      </div>

    </motion.div>
  )
}

export default Club
