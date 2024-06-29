import { CSSProperties } from 'react'

import { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

interface SvgColorProps {
  src?: string
  sx?: CSSProperties
  className?: ClassValue
}

const SvgColor: React.FC<SvgColorProps> = ({
  src,
  sx,
  className,
  ...other
}) => {
  return (
    <div
      className={cn('svg-color', className)}
      style={{
        width: 24,
        height: 24,
        display: 'inline-block',
        backgroundColor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx
      }}
      {...other}
    />
  )
}

export default SvgColor
