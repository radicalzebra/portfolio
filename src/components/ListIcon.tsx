
import { motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

export default function ListIcon({children,targetId}:PropsWithChildren<{targetId:string}>) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({behavior:"smooth",block: "end"})
  } 
  return (
     <motion.li onClick={handleClick} whileHover={{scale:1.4,marginRight:10,marginLeft:10}}>
         {children}
     </motion.li>
  )
}
