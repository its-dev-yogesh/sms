import { FC } from 'react'
import { LazyMotion, m } from 'framer-motion'

// ----------------------------------------------------------------------

const loadFeatures = () => import('./features.js').then(res => res.default)

interface MotionLazyContainerProps {
  children?: React.ReactNode
}

const MotionLazyContainer: FC<MotionLazyContainerProps> = ({ children }) => {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: '100%' }}>{children}</m.div>
    </LazyMotion>
  )
}

export default MotionLazyContainer
