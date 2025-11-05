import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAR_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.car_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 33,
}

export function Car2(props: NodeProps) {
  return <Shape {...CAR_2} {...props} _style={extendStyle(CAR_2, props)} />
}
