import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DPDT_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpdt3;elSwitchState=2;',
  _width: 58,
  _height: 62,
}

export function Dpdt2(props: DiagramNodeProps) {
  return <Shape {...DPDT_2} {...props} />
}
