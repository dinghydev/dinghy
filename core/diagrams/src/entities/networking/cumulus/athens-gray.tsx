import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATHENS_GRAY = {
  _style: {
    entity: 'fillColor=#EAEDF2;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AthensGray(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ATHENS_GRAY)} />
}
