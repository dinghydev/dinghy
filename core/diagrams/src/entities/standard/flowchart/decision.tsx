import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DECISION = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.decision;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Decision(props: DiagramNodeProps) {
  return (
    <Shape {...DECISION} {...props} _style={extendStyle(DECISION, props)} />
  )
}
