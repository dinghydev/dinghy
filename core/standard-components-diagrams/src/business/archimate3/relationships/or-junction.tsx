import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OR_JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=#ffffff',
  },
  _width: 10,
  _height: 10,
}

export function OrJunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...OR_JUNCTION}
      {...props}
      _style={extendStyle(OR_JUNCTION, props)}
    />
  )
}
