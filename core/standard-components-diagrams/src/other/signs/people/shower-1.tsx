import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOWER_1 = {
  _style:
    'shape=mxgraph.signs.people.shower_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 101,
  _height: 98,
}

export function Shower1(props: DiagramNodeProps) {
  return (
    <Shape {...SHOWER_1} {...props} _style={extendStyle(SHOWER_1, props)} />
  )
}
