import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADJUSTABLE_TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.adjustable_transformer;',
  },
  _original_width: 46,
  _original_height: 60,
}

export function AdjustableTransformer(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADJUSTABLE_TRANSFORMER}
      {...props}
      _style={extendStyle(ADJUSTABLE_TRANSFORMER, props)}
    />
  )
}
