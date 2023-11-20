import React, { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
    //Variants
    open: {
       opacity: 1,
       x: 0
    },
    closed: { 
      opacity: 0, 
      x: "-100%" 
    },
  }
  
  export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
        <Items />
      </motion.nav>
    )
  }

/*
Variants are pre-defined visual states that a component can be in. 
By giving a component and its children variants with matching names, 
the whole React trees can be animated by changing a single prop.

By using variants, a parent can easily orchestrate the animations of 
its children with special "transition" props like "staggerChildren".

Variants can also be dynamic functions that return different props based 
on data passed to each component's custom prop.

*/