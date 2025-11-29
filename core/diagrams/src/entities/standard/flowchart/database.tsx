import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.database;whiteSpace=wrap;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Database(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE)} />
}
