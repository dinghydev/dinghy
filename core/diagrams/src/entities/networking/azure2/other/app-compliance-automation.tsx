import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_COMPLIANCE_AUTOMATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/App_Compliance_Automation.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 49.480000000000004,
}

export function AppComplianceAutomation(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, APP_COMPLIANCE_AUTOMATION)} />
  )
}
