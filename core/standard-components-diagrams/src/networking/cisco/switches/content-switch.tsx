import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONTENT_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.content_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 86,
}

export function ContentSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTENT_SWITCH}
      {...props}
      _style={extendStyle(CONTENT_SWITCH, props)}
    />
  )
}
