import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUN_SERVER_X2_4 = {
  _style:
    'shape=mxgraph.rack.oracle.sun_server_x2-4;html=1;labelPosition=right;align=left;spacingLeft=15;dashed=0;shadow=0;fillColor=#ffffff;',
  _width: 161,
  _height: 45,
}

export function SunServerX24(props: DiagramNodeProps) {
  return <Shape {...SUN_SERVER_X2_4} {...props} />
}
