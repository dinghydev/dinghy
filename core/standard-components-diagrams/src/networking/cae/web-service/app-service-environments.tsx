import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_ENVIRONMENTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AppServiceEnvironments(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_SERVICE_ENVIRONMENTS}
      {...props}
      _style={extendStyle(APP_SERVICE_ENVIRONMENTS, props)}
    />
  )
}
