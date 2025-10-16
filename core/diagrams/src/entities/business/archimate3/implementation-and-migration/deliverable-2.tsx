import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELIVERABLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.deliverable;',
  },
  _width: 60,
  _height: 35,
}

export function Deliverable2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELIVERABLE_2}
      {...props}
      _style={extendStyle(DELIVERABLE_2, props)}
    />
  )
}
