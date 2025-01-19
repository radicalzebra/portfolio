import { RxGlobe,RxCrumpledPaper,RxCode,RxLink2,RxQuote } from "react-icons/rx";
import { motion } from 'motion/react';
import ListIcon from "./ListIcon";


export default function Navigation() {
  return (
   <nav className="flex justify-center py-4 w-full sticky top-8  z-40 ">
    <motion.ul initial={{y:-200}} animate={{y:0}} transition={{duration:3}} className="bg-white  w-fit p-4 px-8 rounded-full flex gap-12 cursor-pointer">
      <ListIcon targetId={'about'}>
         <RxQuote className="w-7 h-7"/>
      </ListIcon>
      
      <ListIcon targetId={'code'}>
         <RxCode className="w-7 h-7"/>
      </ListIcon>

      <ListIcon targetId={'projects'}>
         <RxCrumpledPaper className="w-7 h-7"/>
      </ListIcon>

      <ListIcon targetId={'connect'}>
         <RxGlobe className="w-7 h-7"/>
      </ListIcon>

    </motion.ul>
   </nav>
  )
}
