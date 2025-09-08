import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMAGE_DEFINITIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Image_Definitions.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 39,
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
