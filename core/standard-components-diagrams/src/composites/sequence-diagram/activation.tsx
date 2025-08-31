import { type DiagramNodeProps, Shape } from '@diac/base-components'

export type ActivationProps = {
  _x: number
  _y: number
  _width: number
  _height: number
  title?: string
  closed?: boolean
}

export function Activation(props: ActivationProps & DiagramNodeProps) {
  return (
    <Shape
      title=' '
      _style='textDirection=vertical-rl;'
      {...props}
    />
  )
}
