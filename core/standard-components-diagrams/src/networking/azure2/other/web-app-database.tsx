import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_APP_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_App_Database.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function WebAppDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_APP_DATABASE}
      {...props}
      _style={extendStyle(WEB_APP_DATABASE, props)}
    />
  )
}
