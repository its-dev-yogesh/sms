import { CSSProperties, FC } from 'react'
import { m } from 'framer-motion'
import clsx, { ClassValue } from 'clsx'

import { twMerge } from 'tailwind-merge'
import { varContainer } from './variants'

// ----------------------------------------------------------------------

interface MotionContainerProps {
  action?: boolean
  animate?: boolean
  children?: React.ReactNode
  sx?: CSSProperties
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))

const MotionContainer: FC<MotionContainerProps> = ({
  action = false,
  animate,
  children,
  sx,
  ...other
}) => {
  const variants = varContainer({})

  if (action) {
    return (
      <m.div
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={variants}
        style={sx}
        {...other}
      >
        {children}
      </m.div>
    )
  }

  return (
    <m.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={sx}
      {...other}
    >
      {children}
    </m.div>
  )
}

export default MotionContainer
