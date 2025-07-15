import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRAIN_3 = {
  _style:
    'shape=mxgraph.signs.transportation.train_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 62,
}

export function Train3(props: DiagramNodeProps) {
  return <Shape {...TRAIN_3} {...props} />
}
