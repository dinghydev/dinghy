import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const START_2 = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.start_2;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Start2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, START_2)} />
}
