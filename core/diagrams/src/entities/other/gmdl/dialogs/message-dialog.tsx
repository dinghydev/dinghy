import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_DIALOG = {
  _style: {
    entity:
      'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 480,
  _original_height: 480,
}

export function MessageDialog(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MESSAGE_DIALOG)} />
}
