import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CURRENT_TRANSFORMER_3 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.current_transformer_3;',
  _width: 75,
  _height: 10,
}

export function CurrentTransformer3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENT_TRANSFORMER_3}
      {...props}
      _style={extendStyle(CURRENT_TRANSFORMER_3, props)}
    />
  )
}
