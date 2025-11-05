import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUMP_LIQUID = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(liquid);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpLiquid(props: NodeProps) {
  return (
    <Shape
      {...PUMP_LIQUID}
      {...props}
      _style={extendStyle(PUMP_LIQUID, props)}
    />
  )
}
