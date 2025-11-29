import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEQUENTIAL_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.sequential_data;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SequentialData(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEQUENTIAL_DATA)} />
}
