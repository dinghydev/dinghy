import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWIMMING_2 = {
  _style:
    'shape=mxgraph.signs.sports.swimming_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 45,
}

export function Swimming2(props: DiagramNodeProps) {
  return <Shape {...SWIMMING_2} {...props} />
}
