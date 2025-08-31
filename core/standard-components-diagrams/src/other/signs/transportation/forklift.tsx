import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORKLIFT = {
  _style:
    'shape=mxgraph.signs.transportation.forklift;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 87,
}

export function Forklift(props: DiagramNodeProps) {
  return (
    <Shape {...FORKLIFT} {...props} _style={extendStyle(FORKLIFT, props)} />
  )
}
