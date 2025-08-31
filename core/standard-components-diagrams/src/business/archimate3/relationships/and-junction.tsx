import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AND_JUNCTION = {
  _style:
    'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  _width: 10,
  _height: 10,
}

export function AndJunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...AND_JUNCTION}
      {...props}
      _style={extendStyle(AND_JUNCTION, props)}
    />
  )
}
