import { IconChevronLeft } from "@tabler/icons-react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState, type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../store"

interface Navstate {
    isopen: boolean,
    setisopen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ 
    isopen,
    setisopen,
}: Navstate) => {
    const ismute = useStore((state)=>state.ismute)
    const setismute = useStore((state)=>state.setismute)
    const ischaropen = useStore((state)=> state.ischaropen) 
    const setischaropen = useStore((state)=>state.setischaropen)
    const [hidden, setHidden] = useState(false)
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate();

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
        const previous = current == 1 ? 1 : scrollYProgress.getPrevious() || 0;
        if (current > previous) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const mutevarients = {
        "mute": { x: -15 },
        "unmute": { x: 0 }
    }
    
    const unvarients = {
        "mute": { opacity: 0 },
        "unmute": { opacity: 1 } 
    }

    const menuvarients = {
        "open": {
            rotateX: 0
        },
        "close": {
            rotateX: 90
        }
    }

    return ischaropen ?
    (
        <div className=" mt-4 h-10 select-none fixed w-full z-50 px-5 text-bloodRed">
            <IconChevronLeft
                size={40} 
                stroke={3} 
                onClick={()=>{
                    setischaropen()
                    navigate('/characters')
                }}
                className="hover:cursor-pointer" 
            />
        </div>) 
    :  (<div className=" mt-4 h-10 select-none fixed w-full z-50 flex justify-between px-5 font-tt text-bloodRed">
            <motion.div
                animate={(!isopen && hidden) ? { x: -150 } : { x: 0 }}
                transition={{ duration: 0.1, type: "tween" }}
                onClick={()=>{navigate('/')}}
                className={`lg:text-4xl md:text-2xl hover:cursor-pointer font-fightclub transition-all duration-400 ${isopen ? 'text-black' : ''}`}>
                FIGHT CLUB
            </motion.div>
            <motion.div
                animate={(!isopen && hidden) ? { x: 150 } : { x: 0 }}
                transition={{ duration: 0.1, type: "tween" }}
                className='flex md:text-xl lg:text-2xl  transition-all duration-300'>
                <motion.div
                    transition={{ staggerChildren: 0.2 }}
                    className="w-12 select-none relative hover:cursor-pointer"
                    onClick={() => setisopen((prev) => !prev)}
                >
                    <div className="absolute">{"MENU".split('').map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ rotateX: 0 }}
                            animate={isopen ? 'close' : 'open'}
                            variants={menuvarients}
                            className="inline-block"
                            transition={{ duration: 0.1, delay: 0.1 * i }}
                        >{letter}
                        </motion.span>
                    ))}
                    </div>

                    <div className="absolute top-0">{"CLOSE".split('').map((letter, i) => (
                        <motion.span
                            key={i}
                            initial={{ rotateX: 90 }}
                            animate={isopen ? 'open' : 'close'}
                            variants={menuvarients}
                            className="inline-block"
                            transition={{ duration: 0.1, delay: 0.1 * i }}
                        >{letter}
                        </motion.span>
                    ))}</div>
                </motion.div>
                <div
                    className={`w-13 flex hover:cursor-pointer ${ismute ? '' : 'text-neutral-600'} transition-all duration-300`}
                    onClick={setismute}>
                    <motion.div className="flex">
                        <motion.span
                            animate={ismute ? 'mute' : 'unmute'}
                            variants={unvarients}
                            transition={{ duration: 0.1 }}
                        >UN
                        </motion.span>
                        <motion.span
                            animate={ismute ? 'mute' : 'unmute'}
                            variants={mutevarients}
                            transition={{ duration: 0.1 }}
                        >MUTE
                        </motion.span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar