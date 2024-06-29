import { FC } from 'react'
import { m } from 'framer-motion'
import { varFade } from './variants'

interface TextAnimateProps {
  text: string
  variants?: any // You may define a proper type for variants
  sx?: React.CSSProperties
}

const TextAnimate: FC<TextAnimateProps> = ({
  text,
  variants,
  sx,
  ...other
}) => {
  return (
    <m.div
      style={{
        margin: 0,
        // typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade({}).inUp}>
          {letter}
        </m.span>
      ))}
    </m.div>
  )
}

export default TextAnimate
