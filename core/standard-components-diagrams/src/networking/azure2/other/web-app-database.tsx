import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_APP_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_App_Database.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function WebAppDatabase(props: DiagramNodeProps) {
  return <Shape {...WEB_APP_DATABASE} {...props} />
}
