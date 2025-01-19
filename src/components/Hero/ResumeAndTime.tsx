import { motion } from 'framer-motion';
import Timer from './Timer';
import ResumeButton from './ResumeButton';
import ScrollIcon from './ScrollIcon';

function ResumeAndTime() {

   

   return (
    <motion.div transition={{staggerChildren:1,duration:5}} className="flex justify-center gap-16 items-center mt-36 text-white ">

      <ScrollIcon/>
      <ResumeButton/>
      <Timer/>
     
    </motion.div>
   )
}

export default  ResumeAndTime