import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONE_SERVER_2 = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_one_server;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function OneServer2(props: NodeProps) {
  return (
    <Shape
      {...ONE_SERVER_2}
      {...props}
      _style={extendStyle(ONE_SERVER_2, props)}
    />
  )
}
