import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROXY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.proxy;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function Proxy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PROXY)} />
}
