import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETRA_CP3260_ATCA_BLADE_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_cp3260_atca_blade_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 11,
  _original_height: 114,
}

export function NetraCp3260AtcaBladeServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_CP3260_ATCA_BLADE_SERVER}
      {...props}
      _style={extendStyle(NETRA_CP3260_ATCA_BLADE_SERVER, props)}
    />
  )
}
