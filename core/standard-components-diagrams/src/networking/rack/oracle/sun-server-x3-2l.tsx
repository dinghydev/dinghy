import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN_SERVER_X3_2L = {
  _style:
    'shape=mxgraph.rack.oracle.sun_server_x3-2l;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 30,
}

export function SunServerX32l(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUN_SERVER_X3_2L}
      {...props}
      _style={extendStyle(SUN_SERVER_X3_2L, props)}
    />
  )
}
