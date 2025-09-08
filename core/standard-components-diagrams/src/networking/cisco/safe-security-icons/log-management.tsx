import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOG_MANAGEMENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.log_management;',
  },
  _original_width: 30,
  _original_height: 37.5,
}

export function LogManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOG_MANAGEMENT}
      {...props}
      _style={extendStyle(LOG_MANAGEMENT, props)}
    />
  )
}
