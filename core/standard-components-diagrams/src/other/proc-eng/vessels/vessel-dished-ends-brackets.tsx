import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VESSEL_DISHED_ENDS_BRACKETS = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(dished_ends,_brackets);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 95,
}

export function VesselDishedEndsBrackets(props: DiagramNodeProps) {
  return <Shape {...VESSEL_DISHED_ENDS_BRACKETS} {...props} />
}
