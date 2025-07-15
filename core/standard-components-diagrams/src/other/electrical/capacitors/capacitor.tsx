import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CAPACITOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.capacitors.capacitor_6;',
  _width: 100,
  _height: 60,
}

export function Capacitor(props: DiagramNodeProps) {
  return <Shape {...CAPACITOR} {...props} />
}
