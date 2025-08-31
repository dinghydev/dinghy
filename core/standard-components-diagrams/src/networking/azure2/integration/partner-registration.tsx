import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTNER_REGISTRATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Partner_Registration.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 63.2,
}

export function PartnerRegistration(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTNER_REGISTRATION}
      {...props}
      _style={extendStyle(PARTNER_REGISTRATION, props)}
    />
  )
}
