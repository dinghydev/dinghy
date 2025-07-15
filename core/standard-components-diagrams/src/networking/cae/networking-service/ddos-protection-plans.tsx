import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DDOS_PROTECTION_PLANS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DDOS_Protection_Plans.svg;',
  _width: 37,
  _height: 50,
}

export function DdosProtectionPlans(props: DiagramNodeProps) {
  return <Shape {...DDOS_PROTECTION_PLANS} {...props} />
}
