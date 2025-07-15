import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OR_JUNCTION = {
  _style:
    'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=#ffffff',
  _width: 10,
  _height: 10,
}

export function OrJunction(props: DiagramNodeProps) {
  return <Shape {...OR_JUNCTION} {...props} />
}
