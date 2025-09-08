import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPARC_ENTERPRISE_M5000_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sparc_enterprise_m5000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 149,
}

export function SparcEnterpriseM5000Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPARC_ENTERPRISE_M5000_SERVER}
      {...props}
      _style={extendStyle(SPARC_ENTERPRISE_M5000_SERVER, props)}
    />
  )
}
