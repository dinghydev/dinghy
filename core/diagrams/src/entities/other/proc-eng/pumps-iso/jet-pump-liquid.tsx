import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JET_PUMP_LIQUID = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.jet_pump_(liquid);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function JetPumpLiquid(props: DiagramNodeProps) {
  return (
    <Shape
      {...JET_PUMP_LIQUID}
      {...props}
      _style={extendStyle(JET_PUMP_LIQUID, props)}
    />
  )
}
