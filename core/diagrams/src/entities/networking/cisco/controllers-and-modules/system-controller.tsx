import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEM_CONTROLLER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.system_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 58,
}

export function SystemController(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SYSTEM_CONTROLLER)} />
}
