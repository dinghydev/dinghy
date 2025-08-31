import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETRA_SPARC_T4_1B_SERVER_MODULE = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_sparc_t4-1b_server_module;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function NetraSparcT41bServerModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_SPARC_T4_1B_SERVER_MODULE}
      {...props}
      _style={extendStyle(NETRA_SPARC_T4_1B_SERVER_MODULE, props)}
    />
  )
}
