import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_DISHED_ENDS_RING = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(dished_ends,_ring);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 52,
  _height: 95,
}

export function VesselDishedEndsRing(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_ENDS_RING}
      {...props}
      _style={extendStyle(VESSEL_DISHED_ENDS_RING, props)}
    />
  )
}
