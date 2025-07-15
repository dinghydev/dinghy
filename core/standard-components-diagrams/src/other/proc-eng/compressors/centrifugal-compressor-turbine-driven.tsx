import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN = {
  _style:
    'shape=mxgraph.pid.compressors.centrifugal_compressor_-_turbine_driven;dashed=0;fontSize=8;html=1;overflow=fill;',
  _width: 100,
  _height: 70,
}

export function CentrifugalCompressorTurbineDriven(props: DiagramNodeProps) {
  return <Shape {...CENTRIFUGAL_COMPRESSOR_TURBINE_DRIVEN} {...props} />
}
