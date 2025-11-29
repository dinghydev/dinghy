import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOOP_LIMIT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.loop_limit;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function LoopLimit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOOP_LIMIT)} />
}
