import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VESSEL_DOME = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(dome);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 95,
  _height: 55,
}

export function VesselDome(props: DiagramNodeProps) {
  return <Shape {...VESSEL_DOME} {...props} />
}
