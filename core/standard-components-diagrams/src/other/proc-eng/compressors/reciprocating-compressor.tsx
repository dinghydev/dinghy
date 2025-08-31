import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECIPROCATING_COMPRESSOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.reciprocating_compressor',
  },
  _width: 100,
  _height: 40,
}

export function ReciprocatingCompressor(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECIPROCATING_COMPRESSOR}
      {...props}
      _style={extendStyle(RECIPROCATING_COMPRESSOR, props)}
    />
  )
}
