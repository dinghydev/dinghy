import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAIN_2 = {
  _style:
    'shape=mxgraph.signs.transportation.train_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 66,
  _height: 99,
}

export function Train2(props: DiagramNodeProps) {
  return <Shape {...TRAIN_2} {...props} _style={extendStyle(TRAIN_2, props)} />
}
