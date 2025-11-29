import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors.centrifugal_compressor_-_turbine_driven;dashed=0;fontSize=8;html=1;overflow=fill;',
  },
  _width: 100,
  _height: 70,
}

export function CentrifugalCompressorTurbineDriven(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN)}
    />
  )
}
