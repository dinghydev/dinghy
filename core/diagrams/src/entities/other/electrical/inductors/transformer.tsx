import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer;direction=north;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Transformer(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSFORMER}
      {...props}
      _style={extendStyle(TRANSFORMER, props)}
    />
  )
}
