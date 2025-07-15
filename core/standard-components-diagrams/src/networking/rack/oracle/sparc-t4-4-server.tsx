import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPARC_T4_4_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.sparc_t4-4_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 75,
}

export function SparcT44Server(props: DiagramNodeProps) {
  return <Shape {...SPARC_T4_4_SERVER} {...props} />
}
