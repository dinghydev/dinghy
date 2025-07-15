import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSFORMER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer;direction=north;',
  _width: 64,
  _height: 64,
}

export function Transformer(props: DiagramNodeProps) {
  return <Shape {...TRANSFORMER} {...props} />
}
