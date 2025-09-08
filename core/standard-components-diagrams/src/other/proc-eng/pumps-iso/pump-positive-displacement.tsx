import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUMP_POSITIVE_DISPLACEMENT = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(positive_displacement);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpPositiveDisplacement(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_POSITIVE_DISPLACEMENT}
      {...props}
      _style={extendStyle(PUMP_POSITIVE_DISPLACEMENT, props)}
    />
  )
}
