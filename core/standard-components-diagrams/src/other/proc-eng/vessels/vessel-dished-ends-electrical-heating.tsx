import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_DISHED_ENDS_ELECTRICAL_HEATING = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(dished_ends,_electrical_heating);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 50,
  _height: 95,
}

export function VesselDishedEndsElectricalHeating(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_DISHED_ENDS_ELECTRICAL_HEATING}
      {...props}
      _style={extendStyle(VESSEL_DISHED_ENDS_ELECTRICAL_HEATING, props)}
    />
  )
}
