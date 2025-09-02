import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUMP_LIQUID = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(liquid);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpLiquid(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_LIQUID}
      {...props}
      _style={extendStyle(PUMP_LIQUID, props)}
    />
  )
}
