import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUMP_DIAPHRAGM = {
  _style:
    'shape=mxgraph.pid.pumps_-_iso.pump_(diaphragm);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function PumpDiaphragm(props: DiagramNodeProps) {
  return <Shape {...PUMP_DIAPHRAGM} {...props} />
}
