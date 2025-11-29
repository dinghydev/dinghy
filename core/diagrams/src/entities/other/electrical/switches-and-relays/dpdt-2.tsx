import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DPDT_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.dpdt3;elSwitchState=2;',
  },
  _original_width: 58,
  _original_height: 62,
}

export function Dpdt2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DPDT_2)} />
}
