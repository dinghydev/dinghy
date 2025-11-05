import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWEREDGE_R540 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r540;',
  },
  _width: 162,
  _height: 27,
}

export function PoweredgeR540(props: NodeProps) {
  return (
    <Shape
      {...POWEREDGE_R540}
      {...props}
      _style={extendStyle(POWEREDGE_R540, props)}
    />
  )
}
