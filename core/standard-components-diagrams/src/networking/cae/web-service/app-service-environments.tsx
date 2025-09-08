import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_SERVICE_ENVIRONMENTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Service.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
