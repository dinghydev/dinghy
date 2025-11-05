import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOG_MANAGEMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.log_management;',
  },
  _width: 30,
  _height: 37.5,
}

export function LogManagement(props: NodeProps) {
  return (
    <Shape
      {...LOG_MANAGEMENT}
      {...props}
      _style={extendStyle(LOG_MANAGEMENT, props)}
    />
  )
}
