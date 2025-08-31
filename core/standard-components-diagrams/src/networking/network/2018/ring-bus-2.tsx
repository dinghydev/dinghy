import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RING_BUS_2 = {
  _style: {
    entity:
      'strokeColor=#6881B3;edgeStyle=none;rounded=0;endArrow=none;dashed=0;html=1;strokeWidth=2;',
  },
  _width: 1,
  _height: 100,
}

export function RingBus2(props: DiagramNodeProps) {
  return (
    <Shape {...RING_BUS_2} {...props} _style={extendStyle(RING_BUS_2, props)} />
  )
}
