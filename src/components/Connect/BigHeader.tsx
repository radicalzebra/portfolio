import { motion } from "motion/react"
import { useState } from "react"

interface BigHeaderProps {
   hiddenText:string,
   bigText:string
   link:string
}

export default function BigHeader({hiddenText,bigText,link}:BigHeaderProps) {
  const [hover,setHover] = useState(false)

  return (
    <a href={link} target="blank"  className="text-white relative block mb-10">
      
      <motion.div animate={{width:hover ? "100%" : 0 ,paddingRight:hover?8:0,backgroundColor:"white" }} className="absolute w-0 bg-red-400 h-full z-10 flex items-center justify-end text-black">
         {hover && <p className="w-1/3 font-medium">{hiddenText}</p>}
      </motion.div>

      <motion.p 
       onMouseEnter={() => setHover(true)} 
       onMouseLeave={() => setHover(false)} 
       whileHover={{color:"black"}}
       className="text-9xl relative z-20 cursor-pointer bg-transparent"
      >
      {bigText.toUpperCase()}
      </motion.p>



    </a>
  )
}
