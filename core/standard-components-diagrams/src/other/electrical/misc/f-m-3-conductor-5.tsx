import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const F_M_3_CONDUCTOR_5 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.f_m_3_conductor_5',
  _width: 60,
  _height: 60,
}

export function FM3Conductor5(props: DiagramNodeProps) {
  return (
    <Shape
      {...F_M_3_CONDUCTOR_5}
      {...props}
      _style={extendStyle(F_M_3_CONDUCTOR_5, props)}
    />
  )
}
