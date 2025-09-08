import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/management/cloud_management.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CloudManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_MANAGEMENT}
      {...props}
      _style={extendStyle(CLOUD_MANAGEMENT, props)}
    />
  )
}
