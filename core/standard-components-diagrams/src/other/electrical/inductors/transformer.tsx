import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSFORMER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer;direction=north;',
  },
  _width: 60,
  _height: 60,
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
