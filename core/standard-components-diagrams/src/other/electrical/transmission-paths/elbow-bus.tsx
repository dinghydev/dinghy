import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELBOW_BUS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;align=center;verticalAlign=middle;shape=mxgraph.arrows2.bendArrow;dy=15;dx=38;notch=0;arrowHead=55;rounded=0;strokeWidth=1',
  },
  _original_width: 130,
  _original_height: 130,
}

export function ElbowBus(props: DiagramNodeProps) {
  return (
    <Shape {...ELBOW_BUS} {...props} _style={extendStyle(ELBOW_BUS, props)} />
  )
}
