import { ClassValue } from 'clsx'
import { cn } from '@/utils/cn'

interface LabelProps {
  sx?: ClassValue
  endIcon?: React.ReactNode
  children?: React.ReactNode
  startIcon?: React.ReactNode
  variant?: 'filled' | 'outlined' | 'ghost' | 'soft'
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
}

const Label: React.FC<LabelProps> = ({
  children,
  color = 'default',
  variant = 'soft',
  startIcon,
  endIcon,
  sx,
  ...other
}) => {
  const iconStyle = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' }
  }

  const mergedClasses = cn(
    'inline-flex justify-center items-center whitespace-nowrap text-base font-medium rounded-md cursor-default',
    { 'text-gray-800': color === 'default' },
    { [`bg-${color}-500 text-white`]: variant === 'filled' },
    {
      [`border border-${color}-500 text-${color}-500`]: variant === 'outlined'
    },
    { [`bg-${color}-200 text-${color}-800`]: variant === 'soft' },
    sx
  )

  return (
    <span {...other} className={mergedClasses}>
      {startIcon && <div className={cn('mr-3', iconStyle)}>{startIcon}</div>}
      {children}
      {endIcon && <div className={cn('ml-3', iconStyle)}>{endIcon}</div>}
    </span>
  )
}

export default Label
