import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Services.svg;',
  _width: 50,
  _height: 50,
}

export function AppServices(props: DiagramNodeProps) {
  return <Shape {...APP_SERVICES} {...props} />
}
