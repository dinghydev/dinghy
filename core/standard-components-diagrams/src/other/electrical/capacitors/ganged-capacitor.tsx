import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GANGED_CAPACITOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.ganged_capacitor;',
  _width: 100,
  _height: 130,
}

export function GangedCapacitor(props: DiagramNodeProps) {
  return <Shape {...GANGED_CAPACITOR} {...props} />
}
