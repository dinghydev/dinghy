import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATE_KEY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.private_key;',
  },
  _original_width: 55.6,
  _original_height: 50.8,
}

export function PrivateKey(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRIVATE_KEY)} />
}
