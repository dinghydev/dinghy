import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PUMP_SCREW = {
  _style:
    'shape=mxgraph.pid.pumps_-_iso.pump_(screw);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function PumpScrew(props: DiagramNodeProps) {
  return (
    <Shape {...PUMP_SCREW} {...props} _style={extendStyle(PUMP_SCREW, props)} />
  )
}
