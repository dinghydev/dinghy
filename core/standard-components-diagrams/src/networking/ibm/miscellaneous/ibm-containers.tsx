import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBM_CONTAINERS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/ibm_containers.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function IbmContainers(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_CONTAINERS}
      {...props}
      _style={extendStyle(IBM_CONTAINERS, props)}
    />
  )
}
