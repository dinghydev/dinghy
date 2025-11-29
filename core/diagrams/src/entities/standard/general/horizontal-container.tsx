import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HORIZONTAL_CONTAINER = {
  _style: {
    entity: 'swimlane;horizontal=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function HorizontalContainer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HORIZONTAL_CONTAINER)} />
}
