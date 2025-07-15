import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const F_M_2_CONDUCTOR_3 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.f_m_2_conductor_3',
  _width: 100,
  _height: 50,
}

export function FM2Conductor3(props: DiagramNodeProps) {
  return <Shape {...F_M_2_CONDUCTOR_3} {...props} />
}
