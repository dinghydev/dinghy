import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PORT_2 = {
  _style: {
    entity:
      'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;html=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Port2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PORT_2)} />
}
