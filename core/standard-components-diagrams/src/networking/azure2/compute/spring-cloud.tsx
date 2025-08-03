import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRING_CLOUD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Azure_Spring_Cloud.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function SpringCloud(props: DiagramNodeProps) {
  return <Shape {...SPRING_CLOUD} {...props} />
}
