import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 60,
  _height: 60,
}

export function CompressorPiston(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_PISTON}
      {...props}
      _style={extendStyle(COMPRESSOR_PISTON, props)}
    />
  )
}
