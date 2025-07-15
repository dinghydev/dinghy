import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUFFER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.buffer2;',
  _width: 100,
  _height: 60,
}

export function Buffer(props: DiagramNodeProps) {
  return <Shape {...BUFFER} {...props} />
}
