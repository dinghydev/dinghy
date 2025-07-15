import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_REGISTRATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/App_Registrations.svg;',
  _width: 66.92,
  _height: 68,
}

export function AppRegistrations(props: DiagramNodeProps) {
  return <Shape {...APP_REGISTRATIONS} {...props} />
}
