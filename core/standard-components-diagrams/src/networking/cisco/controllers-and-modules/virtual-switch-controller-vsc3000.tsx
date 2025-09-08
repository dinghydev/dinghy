import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_SWITCH_CONTROLLER_VSC3000 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.virtual_switch_controller_(vsc3000);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 46,
  _original_height: 93,
}

export function VirtualSwitchControllerVsc3000(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_SWITCH_CONTROLLER_VSC3000}
      {...props}
      _style={extendStyle(VIRTUAL_SWITCH_CONTROLLER_VSC3000, props)}
    />
  )
}
