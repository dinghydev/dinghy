import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_TEMPLATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Templates.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function ImageTemplates(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_TEMPLATES}
      {...props}
      _style={extendStyle(IMAGE_TEMPLATES, props)}
    />
  )
}
