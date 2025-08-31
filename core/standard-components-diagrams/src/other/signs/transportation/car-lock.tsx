import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAR_LOCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.car_lock;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 75,
}

export function CarLock(props: DiagramNodeProps) {
  return (
    <Shape {...CAR_LOCK} {...props} _style={extendStyle(CAR_LOCK, props)} />
  )
}
