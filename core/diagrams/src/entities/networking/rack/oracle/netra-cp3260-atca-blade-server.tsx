import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETRA_CP3260_ATCA_BLADE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_cp3260_atca_blade_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 11,
  _height: 114,
}

export function NetraCp3260AtcaBladeServer(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NETRA_CP3260_ATCA_BLADE_SERVER)}
    />
  )
}
