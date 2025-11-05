import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_DEFINITIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Definitions.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function ImageDefinitions(props: NodeProps) {
  return (
    <Shape
      {...IMAGE_DEFINITIONS}
      {...props}
      _style={extendStyle(IMAGE_DEFINITIONS, props)}
    />
  )
}
