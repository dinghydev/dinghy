import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BELL = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.bell;',
  _width: 47,
  _height: 60,
}

export function Bell(props: DiagramNodeProps) {
  return <Shape {...BELL} {...props} />
}
