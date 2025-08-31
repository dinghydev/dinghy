import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_DIRECTION = {
  _style: {
    entity: 'shape=triangle;fillColor=strokeColor;',
  },
  _width: 10,
  _height: 10,
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
