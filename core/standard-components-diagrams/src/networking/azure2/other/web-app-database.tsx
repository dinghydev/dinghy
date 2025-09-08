import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB_APP_DATABASE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Web_App_Database.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
