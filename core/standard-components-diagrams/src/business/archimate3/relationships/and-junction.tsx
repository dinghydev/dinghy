import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AND_JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  },
  _original_width: 10,
  _original_height: 10,
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
