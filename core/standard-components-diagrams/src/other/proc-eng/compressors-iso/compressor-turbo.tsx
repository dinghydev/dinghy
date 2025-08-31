import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_TURBO = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(turbo);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function CompressorTurbo(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_TURBO}
      {...props}
      _style={extendStyle(COMPRESSOR_TURBO, props)}
    />
  )
}
