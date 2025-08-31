import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VESSEL_SEMI_TUBE_HEATING_COOLING_COIL = {
  _style:
    'shape=mxgraph.pid.vessels.vessel_(semi-tube_heating-cooling_coil);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 110,
  _height: 70,
}

export function VesselSemiTubeHeatingCoolingCoil(props: DiagramNodeProps) {
  return (
    <Shape
      {...VESSEL_SEMI_TUBE_HEATING_COOLING_COIL}
      {...props}
      _style={extendStyle(VESSEL_SEMI_TUBE_HEATING_COOLING_COIL, props)}
    />
  )
}
