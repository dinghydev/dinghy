import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_SPACE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/App_Space.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AppSpace(props: DiagramNodeProps) {
  return (
    <Shape {...APP_SPACE} {...props} _style={extendStyle(APP_SPACE, props)} />
  )
}
