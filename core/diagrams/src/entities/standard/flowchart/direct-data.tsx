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
  return (
    <Shape
      {...DIRECT_DATA}
      {...props}
      _style={extendStyle(DIRECT_DATA, props)}
    />
  )
}
