import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWERPOINT_AUTOMATION_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.powerpoint_automation_services;',
  },
  _original_width: 59,
  _original_height: 49,
}

export function PowerpointAutomationServices(props: NodeProps) {
  return (
    <Shape
      {...POWERPOINT_AUTOMATION_SERVICES}
      {...props}
      _style={extendStyle(POWERPOINT_AUTOMATION_SERVICES, props)}
    />
  )
}
