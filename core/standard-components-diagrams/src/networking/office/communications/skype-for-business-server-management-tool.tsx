import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SKYPE_FOR_BUSINESS_SERVER_MANAGEMENT_TOOL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.skype_for_business_server_management_tool;',
  _width: 72,
  _height: 48,
}

export function SkypeForBusinessServerManagementTool(props: DiagramNodeProps) {
  return <Shape {...SKYPE_FOR_BUSINESS_SERVER_MANAGEMENT_TOOL} {...props} />
}
