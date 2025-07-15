import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONFERENCE_ANNOUNCEMENT_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.conference_announcement_service;',
  _width: 60,
  _height: 60,
}

export function ConferenceAnnouncementService(props: DiagramNodeProps) {
  return <Shape {...CONFERENCE_ANNOUNCEMENT_SERVICE} {...props} />
}
