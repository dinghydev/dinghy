import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STARTAID = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.startaid;fillColor=#47B0E5;gradientColor=#2F7599',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Startaid(props: DiagramNodeProps) {
  return (
    <Shape {...STARTAID} {...props} _style={extendStyle(STARTAID, props)} />
  )
}
