import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLOR_10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;strokeColor=none;shape=rect;fillColor=#cc0000;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Color10(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COLOR_10)} />
}
