import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_DEFINITIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Image_Definitions.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 39,
}

export function ImageDefinitions(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_DEFINITIONS}
      {...props}
      _style={extendStyle(IMAGE_DEFINITIONS, props)}
    />
  )
}
