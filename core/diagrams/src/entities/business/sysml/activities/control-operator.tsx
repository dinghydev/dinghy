import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_OPERATOR = {
  _style: {
    entity: 'shape=rect;rounded=1;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function ControlOperator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROL_OPERATOR)} />
}
