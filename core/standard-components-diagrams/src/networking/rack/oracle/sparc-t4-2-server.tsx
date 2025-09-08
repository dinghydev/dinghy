import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPARC_T4_2_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sparc_t4-2_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 45,
}

export function SparcT42Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPARC_T4_2_SERVER}
      {...props}
      _style={extendStyle(SPARC_T4_2_SERVER, props)}
    />
  )
}
