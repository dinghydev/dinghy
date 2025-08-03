import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SERVICE_DOMAINS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CustomDomain.svg;strokeColor=none;',
  _width: 50,
  _height: 42,
}

export function AppServiceDomains(props: DiagramNodeProps) {
  return <Shape {...APP_SERVICE_DOMAINS} {...props} />
}
