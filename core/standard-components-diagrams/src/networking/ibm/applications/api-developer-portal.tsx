import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_DEVELOPER_PORTAL = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/api_developer_portal.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ApiDeveloperPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_DEVELOPER_PORTAL}
      {...props}
      _style={extendStyle(API_DEVELOPER_PORTAL, props)}
    />
  )
}
