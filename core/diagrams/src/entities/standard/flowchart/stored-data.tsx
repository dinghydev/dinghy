import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORED_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.stored_data;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function StoredData(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORED_DATA)} />
}
