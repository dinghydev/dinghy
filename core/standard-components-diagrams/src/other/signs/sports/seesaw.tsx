import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEESAW = {
  _style:
    'shape=mxgraph.signs.sports.seesaw;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 54,
}

export function Seesaw(props: DiagramNodeProps) {
  return <Shape {...SEESAW} {...props} />
}
