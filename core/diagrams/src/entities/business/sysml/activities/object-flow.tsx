import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;strokeWidth=2;whiteSpace=wrap;',
  },
  _width: 260,
  _height: 60,
}

export function ObjectFlow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OBJECT_FLOW)} />
}
