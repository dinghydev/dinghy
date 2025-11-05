import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWEREDGE_M820 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m820;',
  },
  _width: 20,
  _height: 143,
}

export function PoweredgeM820(props: NodeProps) {
  return (
    <Shape
      {...POWEREDGE_M820}
      {...props}
      _style={extendStyle(POWEREDGE_M820, props)}
    />
  )
}
