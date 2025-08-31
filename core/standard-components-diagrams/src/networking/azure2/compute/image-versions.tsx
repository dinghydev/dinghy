import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_VERSIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Image_Versions.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 64,
}

export function ImageVersions(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMAGE_VERSIONS}
      {...props}
      _style={extendStyle(IMAGE_VERSIONS, props)}
    />
  )
}
