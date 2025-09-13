import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPARC_T4_1_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.sparc_t4-1_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function SparcT41Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPARC_T4_1_SERVER}
      {...props}
      _style={extendStyle(SPARC_T4_1_SERVER, props)}
    />
  )
}
