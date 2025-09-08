import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CURRENT_TRANSFORMER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.current_transformer_2;',
  },
  _original_width: 125,
  _original_height: 175,
}

export function CurrentTransformer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENT_TRANSFORMER_2}
      {...props}
      _style={extendStyle(CURRENT_TRANSFORMER_2, props)}
    />
  )
}
