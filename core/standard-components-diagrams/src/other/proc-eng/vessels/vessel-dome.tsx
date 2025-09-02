import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_DOME = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dome);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 95,
  _original_height: 55,
}

export function VesselDome(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DOME}
      {...props}
      _style={extendStyle(VESSEL_DOME, props)}
    />
  )
}
