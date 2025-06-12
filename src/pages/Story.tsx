import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import useStore from '../store'

const Story = () => {
  const firstRef = useRef<HTMLDivElement>(null)
  const tylerRef = useRef<HTMLDivElement>(null)
  const endingRef = useRef<HTMLVideoElement>(null)
  const speachRef = useRef<HTMLVideoElement>(null)
  const horizantalRef = useRef<HTMLDivElement>(null)
  const lastDivRef = useRef<HTMLDivElement>(null)
  const [isplaying, setisplaying] = useState(true)
  const [showQuote, setshowQuote] = useState(false)
  const ismute = useStore((state)=>state.ismute)


  useEffect(()=>{
    if(endingRef.current && speachRef.current ){
      endingRef.current.muted = !ismute
      speachRef.current.muted = !ismute
    }
  },[ismute])

  useEffect(()=>{
    const playvedio = async () =>{
      if(endingRef.current && isplaying){
        await endingRef.current.play()
      }
    }
    playvedio()
  },[isplaying])

  useEffect(()=>{
    if(endingRef.current && !isplaying){
      endingRef.current.pause()
    }
  },[isplaying])

  const {scrollYProgress:firstScroll} = useScroll({
    target: firstRef,
    offset: ["start start","end start"]
  })

  const {scrollYProgress:horizantalScroll} = useScroll({
    target:horizantalRef
  })

  const {scrollYProgress:lastDiv} = useScroll({
    target:lastDivRef,
    offset: ['start end', 'start start']
  })

  useMotionValueEvent(lastDiv,"change", latest=>{
    if(speachRef.current){
      if(latest >= 0.6){
        speachRef.current.play()
      }else{
        speachRef.current.pause()
      }
    }
  })

  const shot1text1 = useTransform(horizantalScroll,[0.0,0.25], [200,-200])
  const reserctedText = useTransform(horizantalScroll,[0.12,0.38],[-100,100])
  const reserctedText2 = useTransform(horizantalScroll,[0.12,0.38],[300,-10])

  const owninigText = useTransform(horizantalScroll,[0.45,0.54],["-125%","0%"])
  const owninigText1 = useTransform(horizantalScroll,[0.46,0.54],["-125%","0%"])
  const owninigText2 = useTransform(horizantalScroll,[0.47,0.54],["-125%","0%"])
  const owninigText3 = useTransform(horizantalScroll,[0.61,0.65],["125%","0%"])
  const owninigText4 = useTransform(horizantalScroll,[0.62,0.65],["125%","0%"])
  const owninigText5 = useTransform(horizantalScroll,[0.63,0.65],["125%","0%"])

  const slideText = useTransform(horizantalScroll,[0.28,0.56],[-400,400])
  const fctext = useTransform(horizantalScroll,[0.715,0.78],["-100%","0%"])
  const fctext2 = useTransform(horizantalScroll,[0.8,0.93],["100%","0%"])

  const sittingText = useTransform(horizantalScroll,[0.64,0.84],[0,-300])
  const sittingText1 = useTransform(horizantalScroll,[0.64,0.84],[50,-300])
  const sittingText2 = useTransform(horizantalScroll,[0.64,0.84],[100,-300])

  
  const {scrollYProgress:tylerScroll} = useScroll({
    target:tylerRef,
    offset: ["start end", "end end"]
  })


  const xTransfrom = useTransform(horizantalScroll, [0,1],["0%", "-100%"])
  const textY = useTransform(firstScroll, [0,1] , ["100%","-100%"])
  const volmueControl = useTransform(firstScroll, [0,1], [1,0])
  const transfromYText = useTransform(tylerScroll, [0,1], [200,-200])


  useMotionValueEvent(firstScroll,"change",(latest =>{
    if(endingRef.current){
      endingRef.current.volume = volmueControl.get()
      if(latest >= 0.9){
        setisplaying(false)
      }else{
        setisplaying(true)
      }
    }
  }))

  useMotionValueEvent(horizantalScroll,'change',(latest)=>{
    if(latest==1){
      setshowQuote(true)
    }else{
      setshowQuote(false)
    }
  })


  return (
    <div className='h-auto flex flex-col'>
      <div ref={firstRef} className='h-screen'>
        <div className='absolute flex overflow-hidden justify-center items-end h-screen w-full bg-linear-to-b from-transparent from-90% to-black '>
          <motion.h1
            style={{y:textY}}
            className='font-tt lg:text-7xl md:text-6xl'
          >YOU MET ME AT A VERY STRANGE TIME OF MY LIFE
          </motion.h1>
        </div>
        <video
          src='https://res.cloudinary.com/df6rtyw66/video/upload/v1749634685/endShot_upslff.mp4' 
          ref={endingRef} 
          loop 
          className='object-cover h-screen'/>
      </div>
      
      <div ref={horizantalRef} className='h-[400vh] relative'>
        < motion.div style={{opacity:0,filter:"blur(10px)"}} animate={showQuote?{opacity:1,filter:"blur(0px)"}:{}} className='absolute bottom-0 h-screen w-full flex justify-center items-center'>
            <h1 className='font-tt text-5xl'>"IT'S ONLY AFTER WE'VE LOST EVERYTHING THAT WE'RE FREE TO DO ANYTHING."</h1>  
        </motion.div>

        <div className='h-screen sticky top-0 flex items-center overflow-hidden'>
          <motion.div style={{x:xTransfrom}} className='flex'>

            <div ref={tylerRef} className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635085/uktyler_nmijrg.webp' alt="YouKnowTyler" />
              <motion.div style={{y:transfromYText}} className='absolute h-full w-full font-barlow font-bold text-5xl flex flex-col justify-center px-5'>
                <h1>PEOPLE ALWAYS ASK ME</h1>
                <h1 className='text-bloodRed'>IF I KNOW</h1>
              </motion.div>
            </div>


            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img 
                src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635192/insomnia_d1etw0.webp' 
                alt="insonimia" 
                className='relative' />
              <div className='absolute  h-full w-full flex flex-col justify-center items-center gap-50'>
                <motion.h1 
                  style={{x:shot1text1}}
                  className='lg:text-6xl md:text-5xl font-barlow font-bold text-bloodRed'>FOR SIX MONTHS, I COULDN'T SLEEP.</motion.h1>
                <motion.div style={{x:shot1text1}} className='z-10 lg:text-2xl font-barlow font-bold md:xl'>
                  <h1 >WITH INSOMNIA, NOTHING IS REAL. EVERTHING'S FAR AWAY.EVERTHING'S COPY OF A COPY, OF A COPY.</h1>
                  <h1 >WITH INSOMNIA, NOTHING IS REAL. EVERTHING'S FAR AWAY.EVERTHING'S COPY OF A COPY, OF A COPY.</h1>
                </motion.div>
              </div>
              <img 
                src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635193/insomniaMask_yy5ki9.webp' 
                alt="insominaMask" 
                className='absolute'/>
            </div>

            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635393/reserracted_ethh0i.webp' alt="reserrected" />
              <div className='absolute h-full w-full flex items-center justify-center'>
                <motion.h1 style={{x:reserctedText}} className='text-9xl z-10 font-grandmaster absolute text-bloodRed '>RESURRECTED</motion.h1>
                <motion.h1 style={{x:reserctedText2}} className='text-9xl font-barlow font-bold'>RESURRECTED</motion.h1>
              </div>
              <motion.div  className='text-neutral-500 absolute h-full w-full text-4xl font-barlow font-bold flex flex-col overflow-visible items-center justify-between py-10'>
                <h1>EVERY EVENING I DIED. AND EVERY EVENING I WAS BORN AGAIN.</h1>
              </motion.div>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635364/reserractedMask_wq2efh.webp' alt="reserecctedMask" className='absolute' />
            </div>

            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635468/slide_eamdol.webp' alt="slide" />
              <motion.div style={{x:slideText}} className='absolute h-full w-full flex text-8xl overflow-hidden font-grandmaster justify-center items-center'>
                {Array(20).fill(0).map((_, i) => (
                    <span key={i} className='text-8xl font-grandmaster px-4'>SLIDE</span>
                  ))}
              </motion.div>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635467/slideMask_mljs7c.webp' alt="slideMask" className='absolute' />
            </div>

            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635543/owninig_ij8ae5.webp' alt="owning" />
              <div className='absolute h-full w-full flex justify-between items-center px-5'>
                <div className='flex flex-col items-start text-7xl font-barlow font-bold'>
                  <motion.h1 style={{x:owninigText}}>THINGS</motion.h1>
                  <motion.h1 style={{x:owninigText1}}>YOU</motion.h1>
                  <motion.h1 style={{x:owninigText2}} className='font-fightclub text-bloodRed'>OWN</motion.h1>
                </div>
                <div className='flex flex-col items-end text-7xl font-barlow font-bold'>
                  <motion.h1 style={{x:owninigText3}}>ENDUP</motion.h1>
                  <motion.h1 style={{x:owninigText4}} className='font-fightclub text-bloodRed'>OWNING</motion.h1>
                  <motion.h1 style={{x:owninigText5}}>YOU</motion.h1>
                </div>
              </div>
            </div>


            <div className='h-screen w-screen flex-shrink-0 bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635655/dual_mkee6k.webp' alt="dual" />
              <div className='absolute h-full w-full flex flex-col items-end py-20 text-5xl font-barlow font-bold'>
                <motion.div style={{x:sittingText}} className='flex gap-2'>
                  <h1>HOW MUCH CAN YOU KNOW ABOUT</h1>
                  <h1 className='text-bloodRed'>YOURSELF</h1>
                </motion.div>
                <motion.h1 style={{x:sittingText1}} className='z-10'>IF YOU HAVE NEVER BEEN</motion.h1>
                <motion.div style={{x:sittingText2}} className='flex gap-2'>
                  <h1>TO A</h1>
                  <h1 className='text-bloodRed'>FIGHT</h1>
                </motion.div>
              </div>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635654/dualMask_yvef2o.webp' alt="dualMask" className='absolute' />
            </div>



            <div className='h-screen w-screen flex-shrink-0 overflow-hidden bg-black flex items-center justify-center relative'>
              <img src='https://res.cloudinary.com/df6rtyw66/image/upload/v1749635950/whoYouAre_apufne.webp' alt="whoyouare" />
              <div className='absolute h-full w-full flex justify-between items-center px-5 '>
                <motion.div style={{x:fctext}} className='font-barlow font-bold text-5xl '>
                  <h1>WHO</h1>
                  <h1>YOU</h1>
                  <h1>WERE</h1>
                  <h1>IN</h1>
                  <h1>THE</h1>
                  <h1>FIGHT</h1>
                  <h1>CLUB</h1>
                </motion.div>
                <motion.div style={{x:fctext2}} className='font-barlow font-bold text-5xl flex flex-col items-end'>
                  <h1>IS</h1>
                  <h1>NOT</h1>
                  <h1>WHO</h1>
                  <h1>YOU</h1>
                  <h1>WERE</h1>
                  <h1>IN</h1> 
                  <h1>THE</h1>
                  <h1>REST</h1>
                  <h1>OF</h1>
                  <h1>THE</h1>
                  <h1>WORLD</h1>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div ref={lastDivRef} className='h-screen w-full  flex items-center justify-center'>
        <div className='px-10'>
          <video ref={speachRef} src='https://res.cloudinary.com/df6rtyw66/video/upload/v1749725139/speach_kxkoag.mp4' loop className=' rounded-3xl'/>
        </div>
      </motion.div> 
    </div>
  )
}

export default Story