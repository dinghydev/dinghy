import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECIPROCATING_COMPRESSOR_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.compressors.reciprocating_compressor_2',
  },
  _width: 50,
  _height: 65,
}

export function ReciprocatingCompressor2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RECIPROCATING_COMPRESSOR_2}
      {...props}
      _style={extendStyle(RECIPROCATING_COMPRESSOR_2, props)}
    />
  )
}
