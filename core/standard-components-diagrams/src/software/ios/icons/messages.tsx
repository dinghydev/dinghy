import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGES = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.messages;',
  },
  _original_width: 30,
  _original_height: 25.5,
}

export function Messages(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGES} {...props} _style={extendStyle(MESSAGES, props)} />
  )
}
