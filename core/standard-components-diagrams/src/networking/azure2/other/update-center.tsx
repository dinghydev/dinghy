import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UPDATE_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Update_Center.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function UpdateCenter(props: DiagramNodeProps) {
  return <Shape {...UPDATE_CENTER} {...props} />
}
