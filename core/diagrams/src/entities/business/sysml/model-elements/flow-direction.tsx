import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOW_DIRECTION = {
  _style: {
    entity: 'shape=triangle;fillColor=strokeColor;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function FlowDirection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLOW_DIRECTION)} />
}
