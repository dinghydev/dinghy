import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRIFUGAL_PUMP_3 = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.centrifugal_pump_3;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 70,
  _original_height: 67,
}

export function CentrifugalPump3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL_PUMP_3}
      {...props}
      _style={extendStyle(CENTRIFUGAL_PUMP_3, props)}
    />
  )
}
