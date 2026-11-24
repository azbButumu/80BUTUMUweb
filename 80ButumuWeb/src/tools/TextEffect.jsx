import './TextEffect.css'
import { motion } from 'framer-motion'

export default function TextEffect({ PopText, PopColor }) {
    return (
        <motion.div
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 100% 0% 0%)" }}
        transition={{ duration: 0.3 , delay: 1.5 }}
        className='TextEffect'
        style={{ backgroundColor: PopColor }}>
            <motion.h2
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='Top1' id='SubTxt'>{PopText}</motion.h2>
            <motion.h2
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 ,delay:0.03}}
            className='Top2' id='SubTxt'>{PopText}</motion.h2>
            <motion.h2
            initial={{ y: 80 }}
            whileInView={{ y:  0 }}
            transition={{ duration: 0.5 ,delay:0.06}}
            className='Main'>{PopText}</motion.h2>
            <motion.h2
            initial={{ y: 90 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 ,delay:0.09}}
            className='Bottom1' id='SubTxt'>{PopText}</motion.h2>
            <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 ,delay:0.12}}
            className='Bottom2' id='SubTxt'>{PopText}</motion.h2>
        </motion.div>
    )
}