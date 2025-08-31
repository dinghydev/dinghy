import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSORB_1 = {
  _style:
    'pointerEvents=1;fillColor=strokeColor;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.diodes.transorb_1;',
  _width: 100,
  _height: 60,
}

export function Transorb1(props: DiagramNodeProps) {
  return (
    <Shape {...TRANSORB_1} {...props} _style={extendStyle(TRANSORB_1, props)} />
  )
}
