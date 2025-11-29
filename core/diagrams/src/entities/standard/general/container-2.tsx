import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTAINER_2 = {
  _style: {
    entity: 'swimlane;whiteSpace=wrap;html=1;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function Container2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTAINER_2)} />
}
