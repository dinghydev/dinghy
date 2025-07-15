import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DPDT = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpdt3;elSwitchState=1;',
  _width: 58,
  _height: 62,
}

export function Dpdt(props: DiagramNodeProps) {
  return <Shape {...DPDT} {...props} />
}
