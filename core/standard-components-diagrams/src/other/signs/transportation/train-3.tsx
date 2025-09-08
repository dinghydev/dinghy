import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRAIN_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.train_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 62,
}

export function Train3(props: DiagramNodeProps) {
  return <Shape {...TRAIN_3} {...props} _style={extendStyle(TRAIN_3, props)} />
}
