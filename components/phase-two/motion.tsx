'use client';
import { useState, type ReactNode } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';

export function RouteEntry({children}:{children:ReactNode}) {
  const reduce=useReducedMotion();
  return <motion.div className="route-entry" initial={false} animate={reduce?{}:{opacity:[.85,1],y:[8,0]}} transition={{duration:.32,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function ImageReveal({children,className=''}:{children:ReactNode;className?:string}) {
  const reduce=useReducedMotion();
  return <motion.div className={`image-reveal ${className}`} initial={false} whileInView={reduce?{}:{clipPath:['inset(0% 0% 8% 0%)','inset(0% 0% 0% 0%)']}} viewport={{once:true,margin:'0px 0px 100px 0px',amount:0}} transition={{duration:.5,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
export function ReadingTools() {
  const {scrollY,scrollYProgress}=useScroll();const [visible,setVisible]=useState(false);const reduce=useReducedMotion();
  useMotionValueEvent(scrollY,'change',value=>setVisible(value>900));
  return <><motion.div className="reading-progress" aria-hidden="true" style={{scaleX:scrollYProgress}}/><AnimatePresence>{visible&&<motion.button className="back-to-top" aria-label="Back to top" initial={{opacity:0,y:reduce?0:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.2}} onClick={()=>window.scrollTo({top:0,behavior:reduce?'instant':'smooth'})}><ArrowUp size={17}/><span>TOP</span></motion.button>}</AnimatePresence></>;
}
