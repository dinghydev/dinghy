import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPARC_ENTERPRISE_M4000_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sparc_enterprise_m4000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 89,
}

export function SparcEnterpriseM4000Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPARC_ENTERPRISE_M4000_SERVER}
      {...props}
      _style={extendStyle(SPARC_ENTERPRISE_M4000_SERVER, props)}
    />
  )
}
