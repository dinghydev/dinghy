import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_HOST = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.virtual_host;',
  },
  _width: 108,
  _height: 104,
}

export function VirtualHost(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_HOST)} />
}
