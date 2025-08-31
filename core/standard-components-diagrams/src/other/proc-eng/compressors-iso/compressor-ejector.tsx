import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPRESSOR_EJECTOR = {
  _style:
    'shape=mxgraph.pid.compressors_-_iso.compressor_(ejector);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function CompressorEjector(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_EJECTOR}
      {...props}
      _style={extendStyle(COMPRESSOR_EJECTOR, props)}
    />
  )
}
