import {motion} from "framer-motion"
import HeroImg from "./HeroImg"



function Hero() {
  return (
    <div className="text-white h-screen flex mt-16 justify-between overflow-x-clip">

     <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1}} className="font-bold w-2/4 text-6xl leading-snug">
         Hi, I am Arshad Faiyaz.I am a <motion.span whileHover={{textDecoration:"line-through",scale:0.966}} className="text-green-500 cursor-pointer inline-block">Web Developer</motion.span> and <motion.span whileHover={{textDecoration:"line-through",scale:0.966}} className="text-purple-400 cursor-pointer inline-block">CyberSecurity</motion.span> Enthusiast.
      </motion.p>

      
      <HeroImg/>

    </div>
  )
}

export default Hero