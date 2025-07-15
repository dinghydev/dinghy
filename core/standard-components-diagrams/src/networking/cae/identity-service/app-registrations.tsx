import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_REGISTRATIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Registrations.svg;',
  _width: 50,
  _height: 50,
}

export function AppRegistrations(props: DiagramNodeProps) {
  return <Shape {...APP_REGISTRATIONS} {...props} />
}
