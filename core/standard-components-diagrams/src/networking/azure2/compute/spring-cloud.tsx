import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_CLOUD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Spring_Cloud.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
