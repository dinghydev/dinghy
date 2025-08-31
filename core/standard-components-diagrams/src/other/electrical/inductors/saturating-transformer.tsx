import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATURATING_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.saturating_transformer;',
  },
  _width: 200,
  _height: 150,
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
