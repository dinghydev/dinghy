import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RECIPROCATING_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.reciprocating_compressor',
  },
  _width: 100,
  _height: 40,
}

export function ReciprocatingCompressor(props: NodeProps) {
  return (
    <Shape
      {...RECIPROCATING_COMPRESSOR}
      {...props}
      _style={extendStyle(RECIPROCATING_COMPRESSOR, props)}
    />
  )
}
