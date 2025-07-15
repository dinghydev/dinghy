import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JET_PUMP_LIQUID = {
  _style:
    'shape=mxgraph.pid.pumps_-_iso.jet_pump_(liquid);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function JetPumpLiquid(props: DiagramNodeProps) {
  return <Shape {...JET_PUMP_LIQUID} {...props} />
}
