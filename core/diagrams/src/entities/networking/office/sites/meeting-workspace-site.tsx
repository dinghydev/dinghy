import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEETING_WORKSPACE_SITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.meeting_workspace_site;',
  },
  _original_width: 58,
  _original_height: 50,
}

export function MeetingWorkspaceSite(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MEETING_WORKSPACE_SITE)} />
  )
}
