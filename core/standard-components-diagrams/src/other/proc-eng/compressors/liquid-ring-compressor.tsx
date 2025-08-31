import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIQUID_RING_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.liquid_ring_compressor',
  },
  _width: 60,
  _height: 60,
}

export function LiquidRingCompressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_RING_COMPRESSOR}
      {...props}
      _style={extendStyle(LIQUID_RING_COMPRESSOR, props)}
    />
  )
}
