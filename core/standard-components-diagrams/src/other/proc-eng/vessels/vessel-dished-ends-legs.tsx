import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VESSEL_DISHED_ENDS_LEGS = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(dished_ends,_legs);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 40,
  _height: 122,
}

export function VesselDishedEndsLegs(props: DiagramNodeProps) {
  return <Shape {...VESSEL_DISHED_ENDS_LEGS} {...props} />
}
