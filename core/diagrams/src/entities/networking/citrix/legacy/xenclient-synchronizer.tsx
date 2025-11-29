import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENCLIENT_SYNCHRONIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenclient_synchronizer;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 76,
  _original_height: 91,
}

export function XenclientSynchronizer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, XENCLIENT_SYNCHRONIZER)} />
  )
}
