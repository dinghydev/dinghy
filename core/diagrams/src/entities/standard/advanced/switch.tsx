import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWITCH = {
  _style: {
    entity: 'shape=switch;whiteSpace=wrap;html=1;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Switch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SWITCH)} />
}
