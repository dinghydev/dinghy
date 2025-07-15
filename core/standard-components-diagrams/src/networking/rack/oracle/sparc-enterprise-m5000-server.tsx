import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPARC_ENTERPRISE_M5000_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.sparc_enterprise_m5000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 149,
}

export function SparcEnterpriseM5000Server(props: DiagramNodeProps) {
  return <Shape {...SPARC_ENTERPRISE_M5000_SERVER} {...props} />
}
