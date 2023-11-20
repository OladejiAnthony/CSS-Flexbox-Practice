import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion"

const Mv = () => {
    //MotionValue's

    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )

    return (
        <motion.div style={{ background }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
          >
            <Icon x={x} />
          </motion.div>
        </motion.div>
      )


}

export default Mv

/*
Motion uses "MotionValues" to track the state and velocity of 
every animating value.

By making MotionValues yourself, you can create declarative chains 
of values that map from one into the other.
*/