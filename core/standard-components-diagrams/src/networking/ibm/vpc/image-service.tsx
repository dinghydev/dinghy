import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/ImageService.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ImageService(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_SERVICE}
      {...props}
      _style={extendStyle(IMAGE_SERVICE, props)}
    />
  )
}
