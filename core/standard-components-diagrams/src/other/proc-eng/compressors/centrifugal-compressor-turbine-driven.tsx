import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors.centrifugal_compressor_-_turbine_driven;dashed=0;fontSize=8;html=1;overflow=fill;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function CentrifugalCompressorTurbineDriven(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN}
      {...props}
      _style={extendStyle(CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN, props)}
    />
  )
}
