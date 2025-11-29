import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DDOS_PROTECTION_PLANS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DDoS_Protection_Plans.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function DdosProtectionPlans(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DDOS_PROTECTION_PLANS)} />
}
