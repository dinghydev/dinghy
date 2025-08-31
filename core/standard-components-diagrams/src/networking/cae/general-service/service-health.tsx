import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_HEALTH = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ServiceHealth.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 44,
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
