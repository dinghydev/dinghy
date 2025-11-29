import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VESSEL_FULL_TUBE_HEATING_COOLING_COIL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.vessel_(full-tube_heating-cooling_coil);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 120,
  _height: 70,
}

export function VesselFullTubeHeatingCoolingCoil(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, VESSEL_FULL_TUBE_HEATING_COOLING_COIL)}
    />
  )
}
