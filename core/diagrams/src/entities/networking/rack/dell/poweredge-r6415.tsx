import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWEREDGE_R6415 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_r6415;',
  },
  _width: 162,
  _height: 15,
}

export function PoweredgeR6415(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POWEREDGE_R6415)} />
}
