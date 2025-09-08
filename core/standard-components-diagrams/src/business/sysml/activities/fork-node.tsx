import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORK_NODE = {
  _style: {
    entity:
      'shape=rect;html=1;fillColor=strokeColor;verticalLabelPosition=bottom;verticalAlignment=top;',
  },
  _original_width: 200,
  _original_height: 80,
}

export function ForkNode(props: DiagramNodeProps) {
  return (
    <Shape {...FORK_NODE} {...props} _style={extendStyle(FORK_NODE, props)} />
  )
}
