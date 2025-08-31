import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRETRUCK = {
  _style:
    'shape=mxgraph.signs.transportation.firetruck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 31,
}

export function Firetruck(props: DiagramNodeProps) {
  return (
    <Shape {...FIRETRUCK} {...props} _style={extendStyle(FIRETRUCK, props)} />
  )
}
