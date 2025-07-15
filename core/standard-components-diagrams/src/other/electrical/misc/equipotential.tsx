import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EQUIPOTENTIAL = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.signal_sources.equipotential;',
  _width: 90,
  _height: 90,
}

export function Equipotential(props: DiagramNodeProps) {
  return <Shape {...EQUIPOTENTIAL} {...props} />
}
