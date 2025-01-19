import { motion } from 'framer-motion';
import { RxArrowDown } from 'react-icons/rx';

export default function ScrollIcon() {
  return (
   <motion.div  >
         
         <motion.p 
          className='flex justify-between items-center gap-3'
          animate={{y:[10,0]}} 
          transition={{delay:3,duration:1,repeatType:"reverse",repeat:Infinity,type:"spring"}} 
         >
            Scroll Down {<RxArrowDown/>}
         </motion.p>

   </motion.div>
  )
}
