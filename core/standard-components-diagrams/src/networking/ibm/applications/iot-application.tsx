import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_APPLICATION = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/iot_application.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function IotApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...IOT_APPLICATION}
      {...props}
      _style={extendStyle(IOT_APPLICATION, props)}
    />
  )
}
