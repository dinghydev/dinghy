import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/App_Services.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AppServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICES}
      {...props}
      _style={extendStyle(APP_SERVICES, props)}
    />
  )
}
