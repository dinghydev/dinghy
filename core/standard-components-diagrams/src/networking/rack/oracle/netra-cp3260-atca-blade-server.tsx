import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETRA_CP3260_ATCA_BLADE_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.netra_cp3260_atca_blade_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 11,
  _height: 114,
}

export function NetraCp3260AtcaBladeServer(props: DiagramNodeProps) {
  return <Shape {...NETRA_CP3260_ATCA_BLADE_SERVER} {...props} />
}
