import { FC } from 'react'
import { m } from 'framer-motion'

import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ----------------------------------------------------------------------

interface IconButtonAnimateProps {
  children?: React.ReactNode
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
  size?: 'small' | 'medium' | 'large'
  sx?: ClassValue
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))

const IconButtonAnimate: FC<IconButtonAnimateProps> = ({
  size = 'medium',
  children,
  color,
  sx,
  ...other
}) => {
  return (
    <AnimateWrap size={size}>
      <div {...other}>{children}</div>
    </AnimateWrap>
  )
}

export default IconButtonAnimate

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
}

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 }
}

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 }
}

interface AnimateWrapProps {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const AnimateWrap: FC<AnimateWrapProps> = ({ size, children }) => {
  const isSmall = size === 'small'
  const isLarge = size === 'large'

  return (
    <m.div
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      style={{
        display: 'inline-flex'
      }}
    >
      {children}
    </m.div>
  )
}
