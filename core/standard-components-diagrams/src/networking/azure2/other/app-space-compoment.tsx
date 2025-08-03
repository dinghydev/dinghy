import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_SPACE_COMPOMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/App_Space_Component.svg;strokeColor=none;',
  _width: 56.68,
  _height: 68,
}

export function AppSpaceCompoment(props: DiagramNodeProps) {
  return <Shape {...APP_SPACE_COMPOMENT} {...props} />
}
