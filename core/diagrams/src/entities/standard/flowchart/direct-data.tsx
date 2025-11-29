import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECT_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.direct_data;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function DirectData(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIRECT_DATA)} />
}
