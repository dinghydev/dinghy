import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_SWITCH_MODULE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.content_switch_module;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 86,
  _height: 64,
}

export function ContentSwitchModule(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTENT_SWITCH_MODULE)} />
}
