import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/app_server.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function AppServer(props: DiagramNodeProps) {
  return (
    <Shape {...APP_SERVER} {...props} _style={extendStyle(APP_SERVER, props)} />
  )
}
