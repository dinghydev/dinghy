import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IMAGES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Images.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function Images(props: DiagramNodeProps) {
  return <Shape {...IMAGES} {...props} _style={extendStyle(IMAGES, props)} />
}
