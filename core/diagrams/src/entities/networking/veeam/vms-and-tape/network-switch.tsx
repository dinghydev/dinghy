import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_SWITCH = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.switch;',
  },
  _width: 64,
  _height: 10.8,
}

export function NetworkSwitch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_SWITCH)} />
}
