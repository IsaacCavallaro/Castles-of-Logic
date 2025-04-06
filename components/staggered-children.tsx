"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggeredChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childClassName?: string
}

export default function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  childClassName = "",
}: StaggeredChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Convert children to array to map over them
  const childrenArray = React.Children.toArray(children)

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

