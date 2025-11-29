import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MERCURY_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.mercury_switch;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function MercurySwitch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MERCURY_SWITCH)} />
}
