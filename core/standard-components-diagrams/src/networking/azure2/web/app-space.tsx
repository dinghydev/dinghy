import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SPACE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/App_Space.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AppSpace(props: DiagramNodeProps) {
  return (
    <Shape {...APP_SPACE} {...props} _style={extendStyle(APP_SPACE, props)} />
  )
}
