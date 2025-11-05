import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWEREDGE_R7425 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r7425;',
  },
  _width: 162,
  _height: 30,
}

export function PoweredgeR7425(props: NodeProps) {
  return (
    <Shape
      {...POWEREDGE_R7425}
      {...props}
      _style={extendStyle(POWEREDGE_R7425, props)}
    />
  )
}
