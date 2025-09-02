import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LYNC_CONTROL_PANEL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_control_panel;',
  },
  _original_width: 69,
  _original_height: 58,
}

export function LyncControlPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_CONTROL_PANEL}
      {...props}
      _style={extendStyle(LYNC_CONTROL_PANEL, props)}
    />
  )
}
