import { useState } from 'react'
import { motion } from 'framer-motion';

function Timer() {
   const [time,setTime] = useState(new Date().toLocaleTimeString())
  
   setInterval(()=>{
       setTime(new Date().toLocaleTimeString())
   },1000)
  
   const date = "Local Time " + new Date().toLocaleDateString() + ", " + time

   return (
    <motion.div  className='text-white font-semibold text-xl'>
       <p>{date}</p>
    </motion.div>
   )
}

export default Timer