import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_DEFINITION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Image_Definition.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
}

export function ImageDefinition(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_DEFINITION}
      {...props}
      _style={extendStyle(IMAGE_DEFINITION, props)}
    />
  )
}
