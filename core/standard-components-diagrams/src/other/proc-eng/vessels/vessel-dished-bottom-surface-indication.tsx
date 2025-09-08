import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VESSEL_DISHED_BOTTOM_SURFACE_INDICATION = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_bottom,_surface_indication);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 40,
  _original_height: 87,
}

export function VesselDishedBottomSurfaceIndication(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_BOTTOM_SURFACE_INDICATION}
      {...props}
      _style={extendStyle(VESSEL_DISHED_BOTTOM_SURFACE_INDICATION, props)}
    />
  )
}
