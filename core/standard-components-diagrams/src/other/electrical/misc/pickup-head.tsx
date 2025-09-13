import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PICKUP_HEAD = {
  _style: {
    entity:
      'shape=mxgraph.arrows2.arrow;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;dy=0;dx=10;notch=0;',
  },
  _width: 100,
  _height: 30,
}

export function PickupHead(props: DiagramNodeProps) {
  return (
    <Shape
      {...PICKUP_HEAD}
      {...props}
      _style={extendStyle(PICKUP_HEAD, props)}
    />
  )
}
