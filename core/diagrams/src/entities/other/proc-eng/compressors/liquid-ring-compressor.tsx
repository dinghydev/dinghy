import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_RING_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.liquid_ring_compressor',
  },
  _original_width: 90,
  _original_height: 90,
}

export function LiquidRingCompressor(props: NodeProps) {
  return (
    <Shape
      {...LIQUID_RING_COMPRESSOR}
      {...props}
      _style={extendStyle(LIQUID_RING_COMPRESSOR, props)}
    />
  )
}
