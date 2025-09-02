import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_DISHED_ENDS_LEGS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_ends,_legs);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 122,
}

export function VesselDishedEndsLegs(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_ENDS_LEGS}
      {...props}
      _style={extendStyle(VESSEL_DISHED_ENDS_LEGS, props)}
    />
  )
}
