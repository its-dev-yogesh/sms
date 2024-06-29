// ----------------------------------------------------------------------

import { transitionAnimationProps } from './VariantInterface'

export const varHover = (scale: transitionAnimationProps) => ({
  hover: {
    scale: scale || 1.1
  }
})
