import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_DIFFERENT_DIAMETERS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(different_diameters);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 50,
  _height: 97,
}

export function VesselDifferentDiameters(props: NodeProps) {
  return (
    <Shape
      {...VESSEL_DIFFERENT_DIAMETERS}
      {...props}
      _style={extendStyle(VESSEL_DIFFERENT_DIAMETERS, props)}
    />
  )
}
