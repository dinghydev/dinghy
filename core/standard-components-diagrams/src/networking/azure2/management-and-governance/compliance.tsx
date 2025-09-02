import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPLIANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Compliance.svg;strokeColor=none;',
  },
  _original_width: 52,
  _original_height: 64,
}

export function Compliance(props: DiagramNodeProps) {
  return (
    <Shape {...COMPLIANCE} {...props} _style={extendStyle(COMPLIANCE, props)} />
  )
}
