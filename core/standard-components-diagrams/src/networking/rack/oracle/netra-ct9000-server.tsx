import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETRA_CT9000_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.netra_ct9000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 178,
}

export function NetraCt9000Server(props: DiagramNodeProps) {
  return <Shape {...NETRA_CT9000_SERVER} {...props} />
}
