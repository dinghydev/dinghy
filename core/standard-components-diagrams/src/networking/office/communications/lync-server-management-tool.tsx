import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LYNC_SERVER_MANAGEMENT_TOOL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_server_management_tool;',
  },
  _original_width: 75,
  _original_height: 47,
}

export function LyncServerManagementTool(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_SERVER_MANAGEMENT_TOOL}
      {...props}
      _style={extendStyle(LYNC_SERVER_MANAGEMENT_TOOL, props)}
    />
  )
}
