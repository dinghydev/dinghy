import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSDUCTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.transductor;',
  _width: 200,
  _height: 100,
}

export function Transductor(props: DiagramNodeProps) {
  return <Shape {...TRANSDUCTOR} {...props} />
}
