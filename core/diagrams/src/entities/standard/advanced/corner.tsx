import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CORNER = {
  _style: {
    entity: 'shape=corner;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Corner(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CORNER)} />
}
