import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEX_LOOP_5 = {
  _style:
    'shape=hexagon;strokeWidth=4;html=1;fillColor=#736CA8;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  _width: 4,
  _height: 312,
}

export function HexLoop5(props: DiagramNodeProps) {
  return <Shape {...HEX_LOOP_5} {...props} />
}
