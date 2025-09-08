import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOVERNANCE_RISK_COMPLIANCE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/security/governance_risk_compliance.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function GovernanceRiskCompliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...GOVERNANCE_RISK_COMPLIANCE}
      {...props}
      _style={extendStyle(GOVERNANCE_RISK_COMPLIANCE, props)}
    />
  )
}
