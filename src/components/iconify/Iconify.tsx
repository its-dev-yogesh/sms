import { CSSProperties, HTMLAttributes } from 'react'
import { Icon } from '@iconify/react'
import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

// ----------------------------------------------------------------------

interface IconifyProps {
  sx?: CSSProperties
  className?: ClassValue
  width?: number | string
  icon?: JSX.Element | string
}

const Iconify: React.FC<IconifyProps> = ({
  icon,
  width = 20,
  sx,
  className,
  ...other
}) => {
  return (
    <div
      {...other}
      style={{ width, height: width, ...(sx as CSSProperties) }}
      className={cn('iconify', className)}
    >
      <Icon icon={icon as string} />
    </div>
  )
}

export default Iconify
