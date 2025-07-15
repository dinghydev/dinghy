import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AND_JUNCTION = {
  _style:
    'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  _width: 10,
  _height: 10,
}

export function AndJunction(props: DiagramNodeProps) {
  return <Shape {...AND_JUNCTION} {...props} />
}
