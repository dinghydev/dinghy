import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE_SYNCHRONIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_synchronizer;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleSynchronizer(props: NodeProps) {
  return (
    <Shape
      {...ROLE_SYNCHRONIZER}
      {...props}
      _style={extendStyle(ROLE_SYNCHRONIZER, props)}
    />
  )
}
