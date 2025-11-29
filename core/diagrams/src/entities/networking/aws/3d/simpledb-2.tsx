import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIMPLEDB_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.simpleDb2;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 181.5,
  _height: 192.6,
}

export function Simpledb2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIMPLEDB_2)} />
}
