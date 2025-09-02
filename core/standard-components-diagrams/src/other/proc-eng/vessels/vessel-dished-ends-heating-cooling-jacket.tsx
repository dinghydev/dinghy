import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_DISHED_ENDS_HEATING_COOLING_JACKET = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_ends,_heating-cooling_jacket);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 52,
  _original_height: 95,
}

export function VesselDishedEndsHeatingCoolingJacket(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_ENDS_HEATING_COOLING_JACKET}
      {...props}
      _style={extendStyle(VESSEL_DISHED_ENDS_HEATING_COOLING_JACKET, props)}
    />
  )
}
