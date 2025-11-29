import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWEREDGE_M520 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.dell.poweredge_m520;',
  },
  _width: 20,
  _height: 37,
}

export function PoweredgeM520(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POWEREDGE_M520)} />
}
