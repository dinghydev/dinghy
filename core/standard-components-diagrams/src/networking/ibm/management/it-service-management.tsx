import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IT_SERVICE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/management/it_service_management.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ItServiceManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...IT_SERVICE_MANAGEMENT}
      {...props}
      _style={extendStyle(IT_SERVICE_MANAGEMENT, props)}
    />
  )
}
