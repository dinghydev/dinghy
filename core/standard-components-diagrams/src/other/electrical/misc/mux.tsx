import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MUX = {
  _style:
    'shadow=0;dashed=0;align=center;html=1;strokeWidth=1;shape=mxgraph.electrical.abstract.mux2;whiteSpace=wrap;',
  _width: 80,
  _height: 120,
}

export function Mux(props: DiagramNodeProps) {
  return <Shape {...MUX} {...props} />
}
