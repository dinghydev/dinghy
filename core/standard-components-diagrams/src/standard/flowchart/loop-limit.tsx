import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOOP_LIMIT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.loop_limit;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function LoopLimit(props: DiagramNodeProps) {
  return (
    <Shape {...LOOP_LIMIT} {...props} _style={extendStyle(LOOP_LIMIT, props)} />
  )
}
