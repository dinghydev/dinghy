import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_BLADE_X3_2B_SERVER = {
  _style:
    'shape=mxgraph.rack.oracle.sun_blade_x3-2b_server;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 19,
  _height: 121,
}

export function SunBladeX32bServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_BLADE_X3_2B_SERVER}
      {...props}
      _style={extendStyle(SUN_BLADE_X3_2B_SERVER, props)}
    />
  )
}
