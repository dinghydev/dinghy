import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETRA_SPARC_T4_2_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_sparc_t4-2_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 60,
}

export function NetraSparcT42Server(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NETRA_SPARC_T4_2_SERVER)} />
  )
}
