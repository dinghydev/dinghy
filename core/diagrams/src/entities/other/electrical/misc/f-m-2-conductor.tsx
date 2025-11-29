import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const F_M_2_CONDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.f_m_2_conductor_1',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FM2Conductor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, F_M_2_CONDUCTOR)} />
}
