import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER = {
  _style: {
    entity: 'swimlane;startSize=0;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function Container(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTAINER)} />
}
