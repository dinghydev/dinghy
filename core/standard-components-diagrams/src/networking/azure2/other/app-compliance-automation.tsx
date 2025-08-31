import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_COMPLIANCE_AUTOMATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/App_Compliance_Automation.svg;strokeColor=none;',
  _width: 68,
  _height: 49.480000000000004,
}

export function AppComplianceAutomation(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_COMPLIANCE_AUTOMATION}
      {...props}
      _style={extendStyle(APP_COMPLIANCE_AUTOMATION, props)}
    />
  )
}
