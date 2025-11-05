import { type NodeProps, Shape } from '@dinghy/base-components'

export type ActivationProps = {
  _x: number
  _y: number
  _width: number
  _height: number
  title?: string
  closed?: boolean
}

export function Activation(props: ActivationProps & NodeProps) {
  return (
    <Shape
      title=' '
      _style='textDirection=vertical-rl;'
      {...props}
    />
  )
}
