import { motion } from 'framer-motion';
import hero from "../../assets/hero.png"

export default function HeroImg() {

  return (
    <motion.figure
     className="bg-red-90 flex items-center w-1/3"
     initial={{x:200,opacity:0}} 
     animate={{x:0,opacity:1}} 
     transition={{duration:2,delay:1}}
     >

      <motion.img 
       animate={{y:[-30,-90]}} 
       transition={{delay:3,duration:5,repeatType:"reverse",repeat:Infinity,type:"tween"}} 
       className="bg-blue-60" src={hero}
      />
    </motion.figure>
  )
}
