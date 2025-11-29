import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_DISHED_BOTTOM_SURFACE_INDICATION = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_bottom,_surface_indication);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 40,
  _height: 87,
}

export function VesselDishedBottomSurfaceIndication(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, VESSEL_DISHED_BOTTOM_SURFACE_INDICATION)}
    />
  )
}
