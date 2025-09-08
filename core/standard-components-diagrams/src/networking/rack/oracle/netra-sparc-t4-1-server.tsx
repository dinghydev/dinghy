import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETRA_SPARC_T4_1_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_sparc_t4-1_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _original_width: 161,
  _original_height: 30,
}

export function NetraSparcT41Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_SPARC_T4_1_SERVER}
      {...props}
      _style={extendStyle(NETRA_SPARC_T4_1_SERVER, props)}
    />
  )
}
