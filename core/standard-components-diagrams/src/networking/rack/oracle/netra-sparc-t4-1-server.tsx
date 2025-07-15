import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETRA_SPARC_T4_1_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.netra_sparc_t4-1_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function NetraSparcT41Server(props: DiagramNodeProps) {
  return <Shape {...NETRA_SPARC_T4_1_SERVER} {...props} />
}
