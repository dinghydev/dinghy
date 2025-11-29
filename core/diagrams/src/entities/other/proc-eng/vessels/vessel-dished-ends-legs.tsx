import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_DISHED_ENDS_LEGS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_ends,_legs);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 40,
  _height: 122,
}

export function VesselDishedEndsLegs(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VESSEL_DISHED_ENDS_LEGS)} />
  )
}
