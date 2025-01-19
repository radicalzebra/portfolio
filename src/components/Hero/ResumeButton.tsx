import { RxReader } from "react-icons/rx";
import { motion } from 'framer-motion';
import { useState } from "react";

export default function ResumeButton() {
   const [click,setClick] = useState(false)

   const onClickHandler = () => {
      setClick(true)
  
      setTimeout(()=>{
         setClick(false)
      },100)
   }

   return (
    <motion.button initial={{scale: click ? 0.9 : 1}} animate={{transition:{duration:2,type:"tween"}}} whileHover={{backgroundColor:"white",color:"black",transition:{type:"tween"}}} onClick={onClickHandler} className='bg-blue-500 p-2 px-3 relative rounded-full cursor-pointer font-medium text-white'>
         
         <div className="flex z-30 relative justify-around items-center gap-3">
            <p className=''>Download resume </p>
            <RxReader/>
         </div>

    </motion.button>
   )
}
