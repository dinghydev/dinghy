import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPRESSOR_TURBO = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(turbo);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CompressorTurbo(props: NodeProps) {
  return (
    <Shape
      {...COMPRESSOR_TURBO}
      {...props}
      _style={extendStyle(COMPRESSOR_TURBO, props)}
    />
  )
}
