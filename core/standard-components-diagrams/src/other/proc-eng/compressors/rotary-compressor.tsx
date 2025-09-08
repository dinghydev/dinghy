import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROTARY_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.rotary_compressor',
  },
  _original_width: 42,
  _original_height: 91,
}

export function RotaryCompressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROTARY_COMPRESSOR}
      {...props}
      _style={extendStyle(ROTARY_COMPRESSOR, props)}
    />
  )
}
