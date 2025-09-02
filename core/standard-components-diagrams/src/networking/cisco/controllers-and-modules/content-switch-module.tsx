import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTENT_SWITCH_MODULE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.controllers_and_modules.content_switch_module;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 86,
  _original_height: 64,
}

export function ContentSwitchModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_SWITCH_MODULE}
      {...props}
      _style={extendStyle(CONTENT_SWITCH_MODULE, props)}
    />
  )
}
