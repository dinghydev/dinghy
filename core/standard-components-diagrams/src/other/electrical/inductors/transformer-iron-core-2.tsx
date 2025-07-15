import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSFORMER_IRON_CORE_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transformer_2;',
  _width: 64,
  _height: 60,
}

export function TransformerIronCore2(props: DiagramNodeProps) {
  return <Shape {...TRANSFORMER_IRON_CORE_2} {...props} />
}
