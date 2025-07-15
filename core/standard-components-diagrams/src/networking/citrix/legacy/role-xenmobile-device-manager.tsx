import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_XENMOBILE_DEVICE_MANAGER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_xenmobile_device_manager;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 35,
  _height: 38,
}

export function RoleXenmobileDeviceManager(props: DiagramNodeProps) {
  return <Shape {...ROLE_XENMOBILE_DEVICE_MANAGER} {...props} />
}
