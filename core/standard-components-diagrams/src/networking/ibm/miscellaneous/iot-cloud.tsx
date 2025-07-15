import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_CLOUD = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/iot_cloud.svg;',
  _width: 60,
  _height: 46.2,
}

export function IotCloud(props: DiagramNodeProps) {
  return <Shape {...IOT_CLOUD} {...props} />
}
