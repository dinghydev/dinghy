import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AND_JUNCTION = {
  _style: {
    entity:
      'ellipse;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;fillColor=strokeColor',
  },
  _original_width: 10,
  _original_height: 10,
}

export function AndJunction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AND_JUNCTION)} />
}
