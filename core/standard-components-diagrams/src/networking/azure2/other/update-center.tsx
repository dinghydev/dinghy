import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPDATE_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Update_Center.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function UpdateCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...UPDATE_CENTER}
      {...props}
      _style={extendStyle(UPDATE_CENTER, props)}
    />
  )
}
