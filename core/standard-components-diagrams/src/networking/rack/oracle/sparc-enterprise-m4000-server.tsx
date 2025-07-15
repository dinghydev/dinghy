import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPARC_ENTERPRISE_M4000_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.sparc_enterprise_m4000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 89,
}

export function SparcEnterpriseM4000Server(props: DiagramNodeProps) {
  return <Shape {...SPARC_ENTERPRISE_M4000_SERVER} {...props} />
}
