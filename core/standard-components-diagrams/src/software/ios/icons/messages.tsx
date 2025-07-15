import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGES = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.messages;',
  _width: 30,
  _height: 25.5,
}

export function Messages(props: DiagramNodeProps) {
  return <Shape {...MESSAGES} {...props} />
}
