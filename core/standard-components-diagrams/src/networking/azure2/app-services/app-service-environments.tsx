import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Environments.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
