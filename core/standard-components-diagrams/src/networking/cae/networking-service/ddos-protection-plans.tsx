import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DDOS_PROTECTION_PLANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DDOS_Protection_Plans.svg;strokeColor=none;',
  },
  _original_width: 37,
  _original_height: 50,
}

export function DdosProtectionPlans(props: DiagramNodeProps) {
  return (
    <Shape
      {...DDOS_PROTECTION_PLANS}
      {...props}
      _style={extendStyle(DDOS_PROTECTION_PLANS, props)}
    />
  )
}
