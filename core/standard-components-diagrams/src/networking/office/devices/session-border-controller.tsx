import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SESSION_BORDER_CONTROLLER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.session_border_controller;',
  },
  _original_width: 59,
  _original_height: 52,
}

export function SessionBorderController(props: DiagramNodeProps) {
  return (
    <Shape
      {...SESSION_BORDER_CONTROLLER}
      {...props}
      _style={extendStyle(SESSION_BORDER_CONTROLLER, props)}
    />
  )
}
