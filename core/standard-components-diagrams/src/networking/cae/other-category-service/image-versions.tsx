import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMAGE_VERSIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Image_Versions.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
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
