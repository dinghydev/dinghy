import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELIVERABLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.representation',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Deliverable(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELIVERABLE}
      {...props}
      _style={extendStyle(DELIVERABLE, props)}
    />
  )
}
