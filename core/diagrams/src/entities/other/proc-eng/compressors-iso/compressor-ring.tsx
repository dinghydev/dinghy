import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPRESSOR_RING = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(ring);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CompressorRing(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_RING}
      {...props}
      _style={extendStyle(COMPRESSOR_RING, props)}
    />
  )
}
