import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTRA_DOMAIN_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Domain_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
