import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_HEALTH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Service_Health.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
}

export function ServiceHealth(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_HEALTH}
      {...props}
      _style={extendStyle(SERVICE_HEALTH, props)}
    />
  )
}
