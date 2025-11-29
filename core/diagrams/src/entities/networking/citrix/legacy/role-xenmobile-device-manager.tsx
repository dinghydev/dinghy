import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE_XENMOBILE_DEVICE_MANAGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_xenmobile_device_manager;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _width: 35,
  _height: 38,
}

export function RoleXenmobileDeviceManager(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ROLE_XENMOBILE_DEVICE_MANAGER)}
    />
  )
}
