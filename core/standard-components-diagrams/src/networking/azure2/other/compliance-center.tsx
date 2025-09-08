import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPLIANCE_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Compliance_Center.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ComplianceCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPLIANCE_CENTER}
      {...props}
      _style={extendStyle(COMPLIANCE_CENTER, props)}
    />
  )
}
