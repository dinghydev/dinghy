import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_REGISTRATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/App_Registrations.svg;strokeColor=none;',
  _width: 63,
  _height: 64,
}

export function AppRegistrations(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_REGISTRATIONS}
      {...props}
      _style={extendStyle(APP_REGISTRATIONS, props)}
    />
  )
}
