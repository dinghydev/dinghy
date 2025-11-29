import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAR_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.car_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 88,
}

export function Car1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CAR_1)} />
}
