import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPHERE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Azure_Sphere.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
}

export function Sphere(props: DiagramNodeProps) {
  return <Shape {...SPHERE} {...props} _style={extendStyle(SPHERE, props)} />
}
