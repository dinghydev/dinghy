import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Images.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 64,
}

export function Images(props: DiagramNodeProps) {
  return <Shape {...IMAGES} {...props} _style={extendStyle(IMAGES, props)} />
}
