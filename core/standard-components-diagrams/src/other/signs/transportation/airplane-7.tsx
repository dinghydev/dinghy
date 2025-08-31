import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIRPLANE_7 = {
  _style:
    'shape=mxgraph.signs.transportation.airplane_7;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 44,
}

export function Airplane7(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_7} {...props} _style={extendStyle(AIRPLANE_7, props)} />
  )
}
