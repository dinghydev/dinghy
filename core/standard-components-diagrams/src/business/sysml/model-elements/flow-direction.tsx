import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_DIRECTION = {
  _style: {
    entity: 'shape=triangle;fillColor=strokeColor;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function FlowDirection(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_DIRECTION}
      {...props}
      _style={extendStyle(FLOW_DIRECTION, props)}
    />
  )
}
