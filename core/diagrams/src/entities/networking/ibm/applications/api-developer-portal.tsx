import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const API_DEVELOPER_PORTAL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/api_developer_portal.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
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
