import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.compressor',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Compressor(props: NodeProps) {
  return (
    <Shape {...COMPRESSOR} {...props} _style={extendStyle(COMPRESSOR, props)} />
  )
}
