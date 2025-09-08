import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IOT_CLOUD = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/iot_cloud.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 46.2,
}

export function IotCloud(props: DiagramNodeProps) {
  return (
    <Shape {...IOT_CLOUD} {...props} _style={extendStyle(IOT_CLOUD, props)} />
  )
}
