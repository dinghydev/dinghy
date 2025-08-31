import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADJUSTABLE_TRANSFORMER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.adjustable_transformer;',
  _width: 46,
  _height: 60,
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
