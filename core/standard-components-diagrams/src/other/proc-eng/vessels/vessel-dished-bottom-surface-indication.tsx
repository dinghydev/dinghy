import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VESSEL_DISHED_BOTTOM_SURFACE_INDICATION = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(dished_bottom,_surface_indication);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 40,
  _height: 87,
}

export function VesselDishedBottomSurfaceIndication(props: DiagramNodeProps) {
  return <Shape {...VESSEL_DISHED_BOTTOM_SURFACE_INDICATION} {...props} />
}
