import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_SERVICES = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/InternetServices2.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
