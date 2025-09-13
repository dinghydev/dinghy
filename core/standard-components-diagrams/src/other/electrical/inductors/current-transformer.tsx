import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CURRENT_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.current_transformer_1;',
  },
  _width: 12,
  _height: 75,
}

export function CurrentTransformer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENT_TRANSFORMER}
      {...props}
      _style={extendStyle(CURRENT_TRANSFORMER, props)}
    />
  )
}
