import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/InternetServices2.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function InternetServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_SERVICES}
      {...props}
      _style={extendStyle(INTERNET_SERVICES, props)}
    />
  )
}
