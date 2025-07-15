import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CURRENT_TRANSFORMER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.current_transformer_1;',
  _width: 12,
  _height: 75,
}

export function CurrentTransformer(props: DiagramNodeProps) {
  return <Shape {...CURRENT_TRANSFORMER} {...props} />
}
