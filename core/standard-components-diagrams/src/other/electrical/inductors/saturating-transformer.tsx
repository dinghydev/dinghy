import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SATURATING_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.saturating_transformer;',
  },
  _original_width: 200,
  _original_height: 150,
}

export function SaturatingTransformer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SATURATING_TRANSFORMER}
      {...props}
      _style={extendStyle(SATURATING_TRANSFORMER, props)}
    />
  )
}
