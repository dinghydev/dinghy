import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DDOS_PROTECTION_PLANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DDOS_Protection_Plans.svg;strokeColor=none;',
  },
  _width: 37,
  _height: 50,
}

export function DdosProtectionPlans(props: NodeProps) {
  return (
    <Shape
      {...DDOS_PROTECTION_PLANS}
      {...props}
      _style={extendStyle(DDOS_PROTECTION_PLANS, props)}
    />
  )
}
