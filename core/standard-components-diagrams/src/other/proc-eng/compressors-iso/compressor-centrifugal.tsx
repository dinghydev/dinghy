import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_CENTRIFUGAL = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(centrifugal);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function CompressorCentrifugal(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_CENTRIFUGAL}
      {...props}
      _style={extendStyle(COMPRESSOR_CENTRIFUGAL, props)}
    />
  )
}
