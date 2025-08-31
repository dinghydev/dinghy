import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIRPLANE_1 = {
  _style:
    'shape=mxgraph.signs.transportation.airplane_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 35,
}

export function Airplane1(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_1} {...props} _style={extendStyle(AIRPLANE_1, props)} />
  )
}
