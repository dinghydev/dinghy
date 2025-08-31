import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLOW_DIRECTION_2 = {
  _style: 'shape=triangle;fillColor=strokeColor;direction=south;',
  _width: 10,
  _height: 10,
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
