import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MICROSERVICES_APPLICATION = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/microservices_application.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function MicroservicesApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...MICROSERVICES_APPLICATION}
      {...props}
      _style={extendStyle(MICROSERVICES_APPLICATION, props)}
    />
  )
}
