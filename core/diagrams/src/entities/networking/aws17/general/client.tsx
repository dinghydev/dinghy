import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLIENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.management_console;fillColor=#D2D3D3;gradientColor=none;',
  },
  _original_width: 63,
  _original_height: 63,
}

export function Client(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLIENT)} />
}
