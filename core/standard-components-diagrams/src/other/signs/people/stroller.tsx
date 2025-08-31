import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STROLLER = {
  _style:
    'shape=mxgraph.signs.people.stroller;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 100,
  _height: 85,
}

export function Stroller(props: DiagramNodeProps) {
  return (
    <Shape {...STROLLER} {...props} _style={extendStyle(STROLLER, props)} />
  )
}
