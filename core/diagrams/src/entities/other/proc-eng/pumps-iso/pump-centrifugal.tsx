import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUMP_CENTRIFUGAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(centrifugal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpCentrifugal(props: NodeProps) {
  return (
    <Shape
      {...PUMP_CENTRIFUGAL}
      {...props}
      _style={extendStyle(PUMP_CENTRIFUGAL, props)}
    />
  )
}
