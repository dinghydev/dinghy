import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PIN = {
  _style: {
    entity:
      'fontStyle=0;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;spacingLeft=2;html=1;points=[[0,0.5],[1,0.5]];fillColor=strokeColor;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Pin(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PIN)} />
}
