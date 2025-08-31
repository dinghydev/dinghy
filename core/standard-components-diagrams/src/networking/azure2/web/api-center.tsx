import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/API_Center.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ApiCenter(props: DiagramNodeProps) {
  return (
    <Shape {...API_CENTER} {...props} _style={extendStyle(API_CENTER, props)} />
  )
}
