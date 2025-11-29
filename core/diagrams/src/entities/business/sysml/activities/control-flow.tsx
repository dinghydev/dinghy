import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 60,
}

export function ControlFlow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_FLOW)} />
}
