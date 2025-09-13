import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETRA_CT900_ATCA_BLADE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_ct900_atca_blade_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 178,
}

export function NetraCt900AtcaBladeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_CT900_ATCA_BLADE_SERVER}
      {...props}
      _style={extendStyle(NETRA_CT900_ATCA_BLADE_SERVER, props)}
    />
  )
}
