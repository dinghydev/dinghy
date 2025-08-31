import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_CLOUD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Spring_Cloud.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SpringCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRING_CLOUD}
      {...props}
      _style={extendStyle(SPRING_CLOUD, props)}
    />
  )
}
