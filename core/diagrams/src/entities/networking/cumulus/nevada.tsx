import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NEVADA = {
  _style: {
    entity: 'fillColor=#515D68;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Nevada(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NEVADA)} />
}
