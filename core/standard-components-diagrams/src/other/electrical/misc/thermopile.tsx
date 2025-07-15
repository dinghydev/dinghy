import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THERMOPILE = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.thermopile',
  _width: 80,
  _height: 82,
}

export function Thermopile(props: DiagramNodeProps) {
  return <Shape {...THERMOPILE} {...props} />
}
