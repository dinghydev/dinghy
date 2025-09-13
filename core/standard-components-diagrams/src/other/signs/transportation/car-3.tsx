import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAR_3 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.car_3;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 38,
}

export function Car3(props: DiagramNodeProps) {
  return <Shape {...CAR_3} {...props} _style={extendStyle(CAR_3, props)} />
}
