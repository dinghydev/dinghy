import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=open;verticalAlign=bottom;endSize=12;endFill=1;dashed=1;',
  },
  _original_width: 6,
  _original_height: 250,
}

export function Message3(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_3} {...props} _style={extendStyle(MESSAGE_3, props)} />
  )
}
