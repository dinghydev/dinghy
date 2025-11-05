import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.role;',
  },
  _width: 36.8,
  _height: 50.8,
}

export function Role(props: NodeProps) {
  return <Shape {...ROLE} {...props} _style={extendStyle(ROLE, props)} />
}
