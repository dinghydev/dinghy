import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/App_Services.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
