import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_ACCESS_CONTROL_LIST = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.network_access_control_list;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function NetworkAccessControlList(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, NETWORK_ACCESS_CONTROL_LIST)}
    />
  )
}
