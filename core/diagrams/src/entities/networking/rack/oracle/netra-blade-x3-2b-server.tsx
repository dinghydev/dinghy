import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETRA_BLADE_X3_2B_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_blade_x3-2b_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function NetraBladeX32bServer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, NETRA_BLADE_X3_2B_SERVER)} />
  )
}
