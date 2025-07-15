import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SPACE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/web/App_Space.svg;',
  _width: 68,
  _height: 68,
}

export function AppSpace(props: DiagramNodeProps) {
  return <Shape {...APP_SPACE} {...props} />
}
