import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRIFUGAL_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.centrifugal_compressor',
  },
  _original_width: 70,
  _original_height: 70,
}

export function CentrifugalCompressor(props: NodeProps) {
  return (
    <Shape
      {...CENTRIFUGAL_COMPRESSOR}
      {...props}
      _style={extendStyle(CENTRIFUGAL_COMPRESSOR, props)}
    />
  )
}
