import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPARC_T4_1B_SERVER_MODULE = {
  _style:
    'shape=mxgraph.rack.oracle.sparc_t4-1b_server_module;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 19,
  _height: 121,
}

export function SparcT41bServerModule(props: DiagramNodeProps) {
  return <Shape {...SPARC_T4_1B_SERVER_MODULE} {...props} />
}
