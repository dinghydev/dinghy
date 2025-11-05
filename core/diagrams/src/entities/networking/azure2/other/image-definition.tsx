import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_DEFINITION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Image_Definition.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function ImageDefinition(props: NodeProps) {
  return (
    <Shape
      {...IMAGE_DEFINITION}
      {...props}
      _style={extendStyle(IMAGE_DEFINITION, props)}
    />
  )
}
