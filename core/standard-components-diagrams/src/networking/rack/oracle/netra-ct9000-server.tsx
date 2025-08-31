import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETRA_CT9000_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_ct9000_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 161,
  _height: 178,
}

export function NetraCt9000Server(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_CT9000_SERVER}
      {...props}
      _style={extendStyle(NETRA_CT9000_SERVER, props)}
    />
  )
}
