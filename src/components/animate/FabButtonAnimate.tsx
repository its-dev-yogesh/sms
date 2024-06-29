import { CSSProperties, FC } from 'react'
import { m } from 'framer-motion'

import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// ----------------------------------------------------------------------

interface FabButtonAnimateProps {
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
  sx?: CSSProperties
  className?: string
  sxWrap?: ClassValue
}

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))

const FabButtonAnimate: FC<FabButtonAnimateProps> = ({
  size = 'large',
  children,
  color,
  sx,
  sxWrap,
  ...other
}) => {
  return (
    <AnimateWrap size={size} sxWrap={sxWrap}>
      <div style={sx} {...other}>
        {children}
      </div>
    </AnimateWrap>
  )
}

export default FabButtonAnimate

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 }
}

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 }
}

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 }
}

interface AnimateWrapProps {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  sxWrap?: ClassValue
}

const AnimateWrap: FC<AnimateWrapProps> = ({ size, children, sxWrap }) => {
  const isSmall = size === 'small'
  const isLarge = size === 'large'

  return (
    <m.div
      className={cn(sxWrap)}
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
