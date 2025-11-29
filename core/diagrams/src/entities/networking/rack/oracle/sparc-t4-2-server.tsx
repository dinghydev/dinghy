import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPARC_T4_2_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sparc_t4-2_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 45,
}

export function SparcT42Server(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPARC_T4_2_SERVER)} />
}
