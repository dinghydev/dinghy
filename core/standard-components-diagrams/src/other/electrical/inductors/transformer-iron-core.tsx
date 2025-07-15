import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSFORMER_IRON_CORE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer_1;',
  _width: 64,
  _height: 60,
}

export function TransformerIronCore(props: DiagramNodeProps) {
  return <Shape {...TRANSFORMER_IRON_CORE} {...props} />
}
