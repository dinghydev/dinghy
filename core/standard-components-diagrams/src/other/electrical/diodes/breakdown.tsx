import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREAKDOWN = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.zener_diode_2;',
  _width: 100,
  _height: 60,
}

export function Breakdown(props: DiagramNodeProps) {
  return (
    <Shape {...BREAKDOWN} {...props} _style={extendStyle(BREAKDOWN, props)} />
  )
}
