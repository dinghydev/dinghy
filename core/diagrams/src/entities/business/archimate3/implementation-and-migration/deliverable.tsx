import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELIVERABLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.application;appType=deliverable;',
  },
  _width: 150,
  _height: 75,
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
