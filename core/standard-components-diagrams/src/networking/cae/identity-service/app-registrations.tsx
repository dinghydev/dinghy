import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_REGISTRATIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Registrations.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
