import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRIANGLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.infographic.shadedTriangle;fillColor=#10739E;strokeColor=none;',
  },
  _width: 80,
  _height: 100,
}

export function Triangle(props: DiagramNodeProps) {
  return (
    <Shape {...TRIANGLE} {...props} _style={extendStyle(TRIANGLE, props)} />
  )
}
