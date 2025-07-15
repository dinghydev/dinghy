import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOWNHILL_SKIING_2 = {
  _style:
    'shape=mxgraph.signs.sports.downhill_skiing_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 84,
}

export function DownhillSkiing2(props: DiagramNodeProps) {
  return <Shape {...DOWNHILL_SKIING_2} {...props} />
}
