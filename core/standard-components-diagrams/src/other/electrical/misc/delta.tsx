import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DELTA = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.delta;',
  _width: 50,
  _height: 50,
}

export function Delta(props: DiagramNodeProps) {
  return <Shape {...DELTA} {...props} />
}
