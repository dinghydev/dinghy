import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POTENTIAL_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.potential_transformer_2;',
  },
  _original_width: 92,
  _original_height: 40,
}

export function PotentialTransformer(props: DiagramNodeProps) {
  return (
    <Shape
      {...POTENTIAL_TRANSFORMER}
      {...props}
      _style={extendStyle(POTENTIAL_TRANSFORMER, props)}
    />
  )
}
