import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONE_SERVER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.one_server;',
  },
  _original_width: 76,
  _original_height: 72,
}

export function OneServer(props: NodeProps) {
  return (
    <Shape {...ONE_SERVER} {...props} _style={extendStyle(ONE_SERVER, props)} />
  )
}
