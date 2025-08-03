import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SERVICE_ENVIRONMENTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/App_Service_Environments.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function AppServiceEnvironments(props: DiagramNodeProps) {
  return <Shape {...APP_SERVICE_ENVIRONMENTS} {...props} />
}
