import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/management/data_services.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function DataServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_SERVICES}
      {...props}
      _style={extendStyle(DATA_SERVICES, props)}
    />
  )
}
