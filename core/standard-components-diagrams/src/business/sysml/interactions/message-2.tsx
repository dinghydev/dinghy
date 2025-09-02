import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_2 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=block;verticalAlign=bottom;endSize=12;endFill=1;',
  },
  _original_width: 5,
  _original_height: 250,
}

export function Message2(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_2} {...props} _style={extendStyle(MESSAGE_2, props)} />
  )
}
