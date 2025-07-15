import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DDOS_PROTECTION_PLANS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/DDoS_Protection_Plans.svg;',
  _width: 56.00000000000001,
  _height: 68,
}

export function DdosProtectionPlans(props: DiagramNodeProps) {
  return <Shape {...DDOS_PROTECTION_PLANS} {...props} />
}
