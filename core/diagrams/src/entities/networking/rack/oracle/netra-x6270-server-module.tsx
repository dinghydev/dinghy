import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETRA_X6270_SERVER_MODULE = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_x6270_server_module;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function NetraX6270ServerModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_X6270_SERVER_MODULE}
      {...props}
      _style={extendStyle(NETRA_X6270_SERVER_MODULE, props)}
    />
  )
}
