import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPRESSOR_ROTARY = {
  _style: {
    entity:
      'shape=mxgraph.pid.compressors_-_iso.compressor_(rotary);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CompressorRotary(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPRESSOR_ROTARY}
      {...props}
      _style={extendStyle(COMPRESSOR_ROTARY, props)}
    />
  )
}
