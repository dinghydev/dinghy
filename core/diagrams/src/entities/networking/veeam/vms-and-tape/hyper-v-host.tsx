import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HYPER_V_HOST = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.hyper_v_host;',
  },
  _width: 108,
  _height: 104,
}

export function HyperVHost(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HYPER_V_HOST)} />
}
