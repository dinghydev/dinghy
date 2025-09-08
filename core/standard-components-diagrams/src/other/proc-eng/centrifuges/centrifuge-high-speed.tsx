import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CENTRIFUGE_HIGH_SPEED = {
  _style: {
    entity:
      'shape=mxgraph.pid.centrifuges.centrifuge_(high_speed);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 110,
}

export function CentrifugeHighSpeed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGE_HIGH_SPEED}
      {...props}
      _style={extendStyle(CENTRIFUGE_HIGH_SPEED, props)}
    />
  )
}
