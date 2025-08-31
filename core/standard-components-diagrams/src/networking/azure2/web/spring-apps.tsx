import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Spring_Cloud.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SpringApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRING_APPS}
      {...props}
      _style={extendStyle(SPRING_APPS, props)}
    />
  )
}
