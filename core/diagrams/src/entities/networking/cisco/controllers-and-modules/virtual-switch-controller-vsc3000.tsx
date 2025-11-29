import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_SWITCH_CONTROLLER_VSC3000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.virtual_switch_controller_(vsc3000);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 46,
  _height: 93,
}

export function VirtualSwitchControllerVsc3000(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, VIRTUAL_SWITCH_CONTROLLER_VSC3000)}
    />
  )
}
