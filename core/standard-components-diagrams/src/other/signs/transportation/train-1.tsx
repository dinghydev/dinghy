import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAIN_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.train_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 51,
  _height: 98,
}

export function Train1(props: DiagramNodeProps) {
  return <Shape {...TRAIN_1} {...props} _style={extendStyle(TRAIN_1, props)} />
}
