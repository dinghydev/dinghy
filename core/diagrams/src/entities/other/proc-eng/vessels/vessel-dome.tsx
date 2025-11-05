import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_DOME = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dome);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 95,
  _height: 55,
}

export function VesselDome(props: NodeProps) {
  return (
    <Shape
      {...VESSEL_DOME}
      {...props}
      _style={extendStyle(VESSEL_DOME, props)}
    />
  )
}
