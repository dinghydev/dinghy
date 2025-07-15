import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTNER_REGISTRATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Registration.svg;',
  _width: 68,
  _height: 63.2,
}

export function PartnerRegistration(props: DiagramNodeProps) {
  return <Shape {...PARTNER_REGISTRATION} {...props} />
}
