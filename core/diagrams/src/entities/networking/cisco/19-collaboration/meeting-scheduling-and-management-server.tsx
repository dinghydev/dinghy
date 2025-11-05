import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEETING_SCHEDULING_AND_MANAGEMENT_SERVER = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=meeting_scheduling_and_management_server;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _original_width: 64,
  _original_height: 50,
}

export function MeetingSchedulingAndManagementServer(props: NodeProps) {
  return (
    <Shape
      {...MEETING_SCHEDULING_AND_MANAGEMENT_SERVER}
      {...props}
      _style={extendStyle(MEETING_SCHEDULING_AND_MANAGEMENT_SERVER, props)}
    />
  )
}
