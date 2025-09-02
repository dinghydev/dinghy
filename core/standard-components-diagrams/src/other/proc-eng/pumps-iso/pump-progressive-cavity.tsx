import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUMP_PROGRESSIVE_CAVITY = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps_-_iso.pump_(progressive_cavity);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PumpProgressiveCavity(props: DiagramNodeProps) {
  return (
    <Shape
      {...PUMP_PROGRESSIVE_CAVITY}
      {...props}
      _style={extendStyle(PUMP_PROGRESSIVE_CAVITY, props)}
    />
  )
}
