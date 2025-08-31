import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DECISION = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.decision;whiteSpace=wrap;',
  },
  _width: 60,
  _height: 60,
}

export function Decision(props: DiagramNodeProps) {
  return (
    <Shape {...DECISION} {...props} _style={extendStyle(DECISION, props)} />
  )
}
