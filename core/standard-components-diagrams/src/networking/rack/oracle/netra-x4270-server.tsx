import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETRA_X4270_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_x4270_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 30,
}

export function NetraX4270Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_X4270_SERVER}
      {...props}
      _style={extendStyle(NETRA_X4270_SERVER, props)}
    />
  )
}
