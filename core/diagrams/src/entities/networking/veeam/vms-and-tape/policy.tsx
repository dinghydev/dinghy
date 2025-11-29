import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POLICY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.privilege;',
  },
  _original_width: 60.4,
  _original_height: 58,
}

export function Policy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POLICY)} />
}
