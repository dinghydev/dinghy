import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAPACITOR_UK = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_4;',
  _width: 100,
  _height: 60,
}

export function CapacitorUk(props: DiagramNodeProps) {
  return <Shape {...CAPACITOR_UK} {...props} />
}
