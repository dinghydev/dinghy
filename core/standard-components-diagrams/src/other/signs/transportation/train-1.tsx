import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAIN_1 = {
  _style:
    'shape=mxgraph.signs.transportation.train_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 51,
  _height: 98,
}

export function Train1(props: DiagramNodeProps) {
  return <Shape {...TRAIN_1} {...props} />
}
