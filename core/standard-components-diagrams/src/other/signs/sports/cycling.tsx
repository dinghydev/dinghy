import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CYCLING = {
  _style:
    'shape=mxgraph.signs.sports.cycling;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 84,
}

export function Cycling(props: DiagramNodeProps) {
  return <Shape {...CYCLING} {...props} _style={extendStyle(CYCLING, props)} />
}
