import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONFERENCE_ANNOUNCEMENT_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.conference_announcement_service;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ConferenceAnnouncementService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CONFERENCE_ANNOUNCEMENT_SERVICE)}
    />
  )
}
