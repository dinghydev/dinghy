import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CENTRIFUGAL_PUMP_2 = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.centrifugal_pump_2;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 62,
  _original_height: 77,
}

export function CentrifugalPump2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL_PUMP_2}
      {...props}
      _style={extendStyle(CENTRIFUGAL_PUMP_2, props)}
    />
  )
}
