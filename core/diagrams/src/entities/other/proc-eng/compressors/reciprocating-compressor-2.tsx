import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECIPROCATING_COMPRESSOR_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.reciprocating_compressor_2',
  },
  _original_width: 50,
  _original_height: 65,
}

export function ReciprocatingCompressor2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RECIPROCATING_COMPRESSOR_2)} />
  )
}
