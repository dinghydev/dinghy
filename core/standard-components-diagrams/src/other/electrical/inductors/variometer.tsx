import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VARIOMETER = {
  _style:
    'verticalLabelPosition=top;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.electrical.inductors.variometer;',
  _width: 150,
  _height: 88,
}

export function Variometer(props: DiagramNodeProps) {
  return (
    <Shape {...VARIOMETER} {...props} _style={extendStyle(VARIOMETER, props)} />
  )
}
