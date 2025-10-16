import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_DIRECTION_2 = {
  _style: {
    entity: 'shape=triangle;fillColor=strokeColor;direction=south;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function FlowDirection2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_DIRECTION_2}
      {...props}
      _style={extendStyle(FLOW_DIRECTION_2, props)}
    />
  )
}
