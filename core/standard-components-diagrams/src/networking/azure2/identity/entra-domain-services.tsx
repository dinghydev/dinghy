import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_DOMAIN_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Domain_Services.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function EntraDomainServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_DOMAIN_SERVICES}
      {...props}
      _style={extendStyle(ENTRA_DOMAIN_SERVICES, props)}
    />
  )
}
