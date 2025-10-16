import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OR_JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=#ffffff',
  },
  _original_width: 10,
  _original_height: 10,
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
