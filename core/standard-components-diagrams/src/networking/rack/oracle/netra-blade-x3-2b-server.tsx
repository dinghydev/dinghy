import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETRA_BLADE_X3_2B_SERVER = {
  _style: {
    entity:
      'shape=mxgraph.rack.oracle.netra_blade_x3-2b_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  },
  _width: 19,
  _height: 121,
}

export function NetraBladeX32bServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETRA_BLADE_X3_2B_SERVER}
      {...props}
      _style={extendStyle(NETRA_BLADE_X3_2B_SERVER, props)}
    />
  )
}
