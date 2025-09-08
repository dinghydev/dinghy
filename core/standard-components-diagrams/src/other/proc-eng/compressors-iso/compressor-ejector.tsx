import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPRESSOR_EJECTOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(ejector);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
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
