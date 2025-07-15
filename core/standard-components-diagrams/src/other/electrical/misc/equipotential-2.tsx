import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EQUIPOTENTIAL_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.protective_earth;',
  _width: 25,
  _height: 20,
}

export function Equipotential2(props: DiagramNodeProps) {
  return <Shape {...EQUIPOTENTIAL_2} {...props} />
}
