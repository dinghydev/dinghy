import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRAIN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.train_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 66,
  _height: 99,
}

export function Train2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRAIN_2)} />
}
