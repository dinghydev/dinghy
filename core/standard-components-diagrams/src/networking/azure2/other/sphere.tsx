import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPHERE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Sphere.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 68,
}

export function Sphere(props: DiagramNodeProps) {
  return <Shape {...SPHERE} {...props} _style={extendStyle(SPHERE, props)} />
}
