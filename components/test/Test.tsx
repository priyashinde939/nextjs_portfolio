import React from 'react'
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";


const Test = () => {
    return (
        <div>
            <motion.div
                        className="rounded-full bg-white absolute"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        />
        </div>
    )
}

export default Test
