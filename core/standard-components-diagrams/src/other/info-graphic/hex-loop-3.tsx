import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEX_LOOP_3 = {
  _style: {
    entity:
      'shape=hexagon;strokeWidth=4;html=1;fillColor=#12AAB5;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;rounded=0;',
  },
  _width: 2,
  _height: 312,
}

export function HexLoop3(props: DiagramNodeProps) {
  return (
    <Shape {...HEX_LOOP_3} {...props} _style={extendStyle(HEX_LOOP_3, props)} />
  )
}
