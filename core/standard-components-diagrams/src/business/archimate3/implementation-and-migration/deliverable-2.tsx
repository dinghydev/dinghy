import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELIVERABLE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.deliverable;',
  },
  _original_width: 60,
  _original_height: 35,
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
