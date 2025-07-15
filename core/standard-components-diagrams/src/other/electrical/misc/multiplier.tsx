import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIPLIER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.multiplier;',
  _width: 50,
  _height: 50,
}

export function Multiplier(props: DiagramNodeProps) {
  return <Shape {...MULTIPLIER} {...props} />
}
