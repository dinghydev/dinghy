import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAR_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.car_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 86,
}

export function Car4(props: DiagramNodeProps) {
  return <Shape {...CAR_4} {...props} _style={extendStyle(CAR_4, props)} />
}
