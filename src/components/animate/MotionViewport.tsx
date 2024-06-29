import { FC } from 'react'
import { m } from 'framer-motion'
import { varContainer } from './variants'

interface MotionViewportProps {
  children?: React.ReactNode
  disableAnimatedMobile?: boolean
}

const MotionViewport: FC<MotionViewportProps> = ({
  children,
  disableAnimatedMobile = true,
  ...other
}) => {
  // const isMobile = useResponsive('down', 'sm')

  // if (isMobile && disableAnimatedMobile) {
  //   return <div {...other}>{children}</div>
  // }

  return (
    <m.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer({})}
      {...other}
    >
      {children}
    </m.div>
  )
}

export default MotionViewport
