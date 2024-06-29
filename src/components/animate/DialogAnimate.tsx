import { FC } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { varFade } from './variants'
import { cn } from '@/utils/cn'

interface DialogAnimateProps {
  open?: boolean
  onClose?: () => void
  children?: React.ReactNode
  sx?: ClassValue
  variants?: any // You may define a proper type for variants
}

const DialogAnimate: FC<DialogAnimateProps> = ({
  open = false,
  variants,
  onClose,
  children,
  sx,
  ...other
}) => {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          {...(variants ||
            varFade({
              distance: 120,
              durationIn: 0.32,
              durationOut: 0.24,
              easeIn: 'easeInOut'
            }).inUp)}
          className={cn('fixed inset-0 flex items-center justify-center')}
        >
          <div
            onClick={onClose}
            className={cn('absolute inset-0 bg-black opacity-40')}
          />
          <div className={cn('bg-white rounded-lg shadow-lg', sx)} {...other}>
            {children}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}

export default DialogAnimate
