import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPHERE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Sphere.svg;strokeColor=none;',
  _width: 66,
  _height: 68,
}

export function Sphere(props: DiagramNodeProps) {
  return <Shape {...SPHERE} {...props} />
}
